import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SteppingComponent } from './stepping/stepping.component';
import { StepComponent } from './step/step.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BurgerServiceService } from './burger-service.service';
import { WizardService } from './wizard.service';

describe('AppComponent', () => {
  let wiz: SteppingComponent;
  let wizDom;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SteppingComponent,
        StepComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [BurgerServiceService, WizardService],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    wiz = fixture.debugElement.children[1].componentInstance;
    wizDom = fixture.debugElement.children[1];
    wizDom.children[0].children[1].children.forEach(c => {
      c.componentInstance.disabled = c.attributes.disabled === 'true' ? true : false;
      if (!c.componentInstance.disabled) {
        c.componentInstance.title = c.attributes.title;
        c.componentInstance.active = false;
        wiz.stepArr.push(c.componentInstance);
      }
    });
    if (wiz.stepArr.length > 0) {
      wiz.stepArr[0].active = true;
      wiz.current = wiz.stepArr[0];
    }
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should verify there are 7 steps in wizard', async(() => {
    expect(wizDom.children[0].children[1].children.length).toBe(7);
  }));

  it('should verify first step as initial', async(() => {
    expect(wiz.currentIndex()).toBe(0);
  }));

  it('should verify on second step on next', async(() => {
    wiz.next();
    expect(wiz.currentIndex()).toBe(1);
  }));

  it('should verify to stay on second step', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    expect(wiz.currentIndex()).toBe(1);
    wiz.stepArr[1].isValid = true;
  }));

  it('should verify to be on third step after step two is valid', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    wiz.stepArr[1].isValid = true;
    wiz.next();
    expect(wiz.currentIndex()).toBe(2);
  }));

  it('should verify to be on fourth step', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    wiz.stepArr[1].isValid = true;
    wiz.next();
    wiz.next();
    expect(wiz.currentIndex()).toBe(3);
  }));

  it('should verify that fourth step is Cheese', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    wiz.stepArr[1].isValid = true;
    wiz.next();
    wiz.next();
    expect(wiz.currentActiveStep().title).toBe('Cheese');
  }));

  it('should verify that fifth step is Patty', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    wiz.stepArr[1].isValid = true;
    wiz.next();
    wiz.next();
    wiz.next();
    expect(wiz.currentActiveStep().title).toBe('Patty');
  }));

  it('should verify on last step', async(() => {
    wiz.stepArr[1].isValid = false;
    wiz.next();
    wiz.stepArr[1].isValid = true;
    wiz.next();
    wiz.next();
    wiz.next();
    wiz.next();
    wiz.next();
    expect(wiz.currentIndex()).toBe((wiz.stepArr.length - 1));
  }));
});
