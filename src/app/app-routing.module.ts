import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {InoButtonShowcaseComponent} from './showcases/ino-button-showcase/ino-button-showcase.component';
import {InoChipShowcaseComponent} from './showcases/ino-chip-showcase/ino-chip-showcase.component';
import {InoChipSetShowcaseComponent} from './showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import {InoFabShowcaseComponent} from './showcases/ino-fab-showcase/ino-fab-showcase.component';
import {InoIconButtonShowcaseComponent} from './showcases/ino-icon-button-showcase/ino-icon-button-showcase.component';
import {InoSegmentButtonShowcaseComponent} from './showcases/ino-segment-button-showcase/ino-segment-button-showcase.component';
import {InoCardShowcaseComponent} from './showcases/ino-card-showcase/ino-card-showcase.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'showcase/ino-button', component: InoButtonShowcaseComponent },
  { path: 'showcase/ino-chip', component: InoChipShowcaseComponent },
  { path: 'showcase/ino-chip-set', component: InoChipSetShowcaseComponent },
  { path: 'showcase/ino-fab', component: InoFabShowcaseComponent },
  { path: 'showcase/ino-icon-button', component: InoIconButtonShowcaseComponent },
  { path: 'showcase/ino-segment-button', component: InoSegmentButtonShowcaseComponent },
  { path: 'showcase/ino-card', component: InoCardShowcaseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
