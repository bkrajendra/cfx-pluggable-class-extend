import { Injectable } from '@angular/core';
import { CfxbaseService } from './cfxbase.service';

@Injectable()
export class CfxImplementService extends CfxbaseService {
  constructor() {
    super();
  }
  validateGroup() {
    console.log('validateGroup running from impl.');
  }
}
