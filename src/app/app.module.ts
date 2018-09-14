import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { SteppingComponent } from './stepping/stepping.component';
import { StepComponent } from './step/step.component';
import { BurgerServiceService } from './burger-service.service';
import { WizardService } from './wizard.service';

@NgModule({
  declarations: [
    AppComponent,
    SteppingComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    SteppingComponent,
    StepComponent
  ],
  providers: [BurgerServiceService, WizardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AppModule };
  }
}
