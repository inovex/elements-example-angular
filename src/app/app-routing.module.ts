import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {InoButtonShowcaseComponent} from './showcases/ino-button-showcase/ino-button-showcase.component';
import {InoChipShowcaseComponent} from './showcases/ino-chip-showcase/ino-chip-showcase.component';
import {InoChipSetShowcaseComponent} from './showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import {InoFabShowcaseComponent} from './showcases/ino-fab-showcase/ino-fab-showcase.component';
import {InoIconButtonShowcaseComponent} from './showcases/ino-icon-button-showcase/ino-icon-button-showcase.component';
import {InoSegmentButtonShowcaseComponent} from './showcases/ino-segment-button-showcase/ino-segment-button-showcase.component';
import {InoCardShowcaseComponent} from './showcases/ino-card-showcase/ino-card-showcase.component';
import {InoListShowcaseComponent} from './showcases/ino-list-showcase/ino-list-showcase.component';
import {InoDialogShowcaseComponent} from './showcases/ino-dialog-showcase/ino-dialog-showcase.component';
import {InoListItemShowcaseComponent} from './showcases/ino-list-item-showcase/ino-list-item-showcase.component';
import {InoMenuShowcaseComponent} from './showcases/ino-menu-showcase/ino-menu-showcase.component';
import {InoNavDrawerShowcaseComponent} from './showcases/ino-nav-drawer-showcase/ino-nav-drawer-showcase.component';
import {InoCarouselShowcaseComponent} from './showcases/ino-carousel-showcase/ino-carousel-showcase.component';
import {InoCheckboxShowcaseComponent} from './showcases/ino-checkbox-showcase/ino-checkbox-showcase.component';
import {InoDatepickerShowcaseComponent} from './showcases/ino-datepicker-showcase/ino-datepicker-showcase.component';
import {InoIconShowcaseComponent} from './showcases/ino-icon-showcase/ino-icon-showcase.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'showcase/ino-button', component: InoButtonShowcaseComponent },
  { path: 'showcase/ino-chip', component: InoChipShowcaseComponent },
  { path: 'showcase/ino-chip-set', component: InoChipSetShowcaseComponent },
  { path: 'showcase/ino-fab', component: InoFabShowcaseComponent },
  { path: 'showcase/ino-icon-button', component: InoIconButtonShowcaseComponent },
  { path: 'showcase/ino-segment-button', component: InoSegmentButtonShowcaseComponent },
  { path: 'showcase/ino-card', component: InoCardShowcaseComponent },
  { path: 'showcase/ino-list', component: InoListShowcaseComponent },
  { path: 'showcase/ino-dialog', component: InoDialogShowcaseComponent },
  { path: 'showcase/ino-list-item', component: InoListItemShowcaseComponent },
  { path: 'showcase/ino-menu', component: InoMenuShowcaseComponent },
  { path: 'showcase/ino-nav-drawer', component: InoNavDrawerShowcaseComponent },
  { path: 'showcase/ino-carousel', component: InoCarouselShowcaseComponent },
  { path: 'showcase/ino-checkbox', component: InoCheckboxShowcaseComponent },
  { path: 'showcase/ino-datepicker', component: InoDatepickerShowcaseComponent },
  { path: 'showcase/ino-icon', component: InoIconShowcaseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
