import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {InoElementsModule} from '@inovex.de/elements-angular';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ShowcaseComponent} from './showcase/showcase.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ShowcaseCardComponent} from './showcase-card/showcase-card.component';
import {InoButtonShowcaseComponent} from './showcases/ino-button-showcase/ino-button-showcase.component';
import { InoChipShowcaseComponent } from './showcases/ino-chip-showcase/ino-chip-showcase.component';
import { InoChipSetShowcaseComponent } from './showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import { ShowcaseSectionComponent } from './showcase-section/showcase-section.component';

@NgModule({
  declarations: [AppComponent, ShowcaseComponent, NavigationComponent, TodoListComponent, ShowcaseCardComponent, InoButtonShowcaseComponent, InoChipShowcaseComponent, InoChipSetShowcaseComponent, ShowcaseSectionComponent],
  imports: [BrowserModule, SharedModule, InoElementsModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
