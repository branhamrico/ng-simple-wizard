import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppingComponent } from './stepping.component';
import { StepComponent } from '../step/step.component';
import { WizardService } from '../wizard.service';
import { By } from '@angular/platform-browser';

describe('SteppingComponent', () => {
  let component: SteppingComponent;
  let fixture: ComponentFixture<SteppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppingComponent ],
      providers: [WizardService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppingComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
