import { Component, OnInit } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  selector: 'app-extended-input',
  templateUrl: './extended-input.component.html',
  styleUrls: ['./extended-input.component.css'],
})
export class ExtendedInputComponent
  extends BaseInputComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit() {}

  onTextChange() {
    console.log('extended stuff');
  }
}
