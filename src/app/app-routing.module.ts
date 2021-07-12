import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {InoButtonShowcaseComponent} from './showcases/ino-button-showcase/ino-button-showcase.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'showcase/ino-button', component: InoButtonShowcaseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
