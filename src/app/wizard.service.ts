import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WizardService {
  onComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  reset() {
    this.onComplete.next(true);
  }

}
