import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import 'stencil-components/dist/stencil-components';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
