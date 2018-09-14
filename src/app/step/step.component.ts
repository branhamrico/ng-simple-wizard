import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  public active = false;
  @Input() title = '';
  @Input() disabled = false;
  @Input() isValid = true;

  constructor() { }

  ngOnInit() {
  }

}
