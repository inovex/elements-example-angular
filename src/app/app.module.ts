import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InoInputWrapperComponent } from './ino-input-wrapper/ino-input-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    InoInputWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
