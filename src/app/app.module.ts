import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { InoElementsModule } from '@inovex.de/elements-angular';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ShowcaseCardComponent } from './showcase-card/showcase-card.component';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';

@NgModule({
  declarations: [AppComponent, ShowcaseComponent, NavigationComponent, TodoListComponent, ShowcaseCardComponent, ShowcaseDialogComponent],
  imports: [BrowserModule, SharedModule, InoElementsModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
