import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css'],
})
export class BaseInputComponent implements OnInit {
  constructor() {}
  value: string;

  @Output()
  inputChanged = new EventEmitter();

  ngOnInit() {}

  onTextChange() {
    if (this.inputChanged.observed) {
      this.inputChanged.emit(this.value);
    } else {
      // Internal Functionality
      console.log('change txt base');
    }
  }
  functionTobeOveridden() {
    console.log('functionTobeOveridden');
  }
}
