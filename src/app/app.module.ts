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
import {InoChipShowcaseComponent} from './showcases/ino-chip-showcase/ino-chip-showcase.component';
import {InoChipSetShowcaseComponent} from './showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import {ShowcaseSectionComponent} from './showcase-section/showcase-section.component';
import {InoFabShowcaseComponent} from './showcases/ino-fab-showcase/ino-fab-showcase.component';
import {InoIconButtonShowcaseComponent} from './showcases/ino-icon-button-showcase/ino-icon-button-showcase.component';
import { InoSegmentButtonShowcaseComponent } from './showcases/ino-segment-button-showcase/ino-segment-button-showcase.component';
import { InoCardShowcaseComponent } from './showcases/ino-card-showcase/ino-card-showcase.component';
import { InoListShowcaseComponent } from './showcases/ino-list-showcase/ino-list-showcase.component';
import { InoDialogShowcaseComponent } from './showcases/ino-dialog-showcase/ino-dialog-showcase.component';
import { InoListItemShowcaseComponent } from './showcases/ino-list-item-showcase/ino-list-item-showcase.component';
import { InoMenuShowcaseComponent } from './showcases/ino-menu-showcase/ino-menu-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    NavigationComponent,
    TodoListComponent,
    ShowcaseCardComponent,
    InoButtonShowcaseComponent,
    InoChipShowcaseComponent,
    InoChipSetShowcaseComponent,
    ShowcaseSectionComponent,
    InoFabShowcaseComponent,
    InoIconButtonShowcaseComponent,
    InoSegmentButtonShowcaseComponent,
    InoCardShowcaseComponent,
    InoListShowcaseComponent,
    InoDialogShowcaseComponent,
    InoListItemShowcaseComponent,
    InoMenuShowcaseComponent,
  ],
  imports: [BrowserModule, SharedModule, InoElementsModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
