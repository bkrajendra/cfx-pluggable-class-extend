import { Injectable } from '@angular/core';
// core class - part of project - confluxsys
// Extended plugin customer

@Injectable()
export class CfxbaseService {
  constructor() {}

  validateCommand() {
    //all the confluxsys logic
    console.log('validateCommand running from core.');
  }
  validateGroup() {
    console.log('validateGroup running from core.');
  }
}
