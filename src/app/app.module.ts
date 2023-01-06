import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { ExtendedInputComponent } from './extended-input/extended-input.component';
import { CfxImplementService } from './cfx-implement.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BaseInputComponent,
    ExtendedInputComponent,
  ],
  providers:[CfxImplementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
