import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {InoElementsModule} from '@inovex.de/elements-angular';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from './navigation/navigation.component';
import {TodoListComponent} from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, SharedModule, InoElementsModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
