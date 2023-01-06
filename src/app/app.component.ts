import { Component, OnInit, VERSION } from '@angular/core';
import { CfxImplementService } from './cfx-implement.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'CFX pluggablity';

  constructor(private cfxdo: CfxImplementService) {}
  doSomething() {}
  ngOnInit() {
    this.cfxdo.validateCommand();
    this.cfxdo.validateGroup();
  }
}
