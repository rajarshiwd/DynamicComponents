import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertComponent} from './alert.component'




@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
   
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AlertComponent],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
