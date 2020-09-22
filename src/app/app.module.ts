import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InoElementsModule } from '@inovex.de/elements-angular';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    InoElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
