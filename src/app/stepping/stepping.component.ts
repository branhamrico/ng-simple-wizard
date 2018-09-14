import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-stepping',
  templateUrl: './stepping.component.html',
  styleUrls: ['./stepping.component.css']
})
export class SteppingComponent implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(StepComponent)
  wizardSteps: QueryList<StepComponent>;

  public stepArr: Array<StepComponent> = [];
  public loading = false;
  public current: StepComponent;

  @Output() beforeStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() afterStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() completed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private wiz: WizardService) {
    this.wiz.onComplete.subscribe((v) => {
      if (v) {
        this.init();
      }
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.init();
  }

  public currentActiveStep() {
    return this.stepArr.find(s => s.active);
  }

  public next(): void {
    if (this.withNext()) {
      const s = this.currentIndex();
      if (this.stepArr[s].isValid) {
        this.beforeStepEmit();
        this.stepArr[s].active = false;
        this.stepArr[s + 1].active = true;
        this.current = this.stepArr[s + 1];
        this.afterStepEmit();
      }
    }
  }

  public prev(): void {
    if (this.withPrev()) {
      const s = this.currentIndex();
      this.beforeStepEmit();
      this.stepArr[s].active = false;
      this.stepArr[s - 1].active = true;
      this.current = this.stepArr[s - 1];
      this.afterStepEmit();
    }
  }

  public currentNotValid() {
    return !this.stepArr[this.currentIndex()].isValid;
  }

  public finish() {
    this.loading = true;
    this.completed.emit(true);
  }

  private beforeStepEmit() {
    this.beforeStep.emit({
      index: this.currentIndex(),
      component: this.current
    });
  }

  private afterStepEmit() {
    this.afterStep.emit({
      index: this.currentIndex(),
      component: this.current
    });
  }

  public currentIndex() {
    return this.stepArr.indexOf(this.current);
  }

  private withNext() {
    return this.currentIndex() < (this.stepArr.length - 1);
  }

  private withPrev() {
    return this.currentIndex() > 0;
  }

  private init() {
    this.loading = false;
    this.stepArr = [];
    this.wizardSteps.forEach(w => {
      if (!w.disabled) {
        w.active = false;
        this.stepArr.push(w);
      }
    });
    this.stepArr[0].active = true;
    this.current = this.stepArr[0];
  }

  ngOnDestroy() {
    this.wiz.onComplete.unsubscribe();
  }
}
