import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {InoButtonShowcaseComponent} from './showcase/showcases/ino-button-showcase/ino-button-showcase.component';
import {InoChipShowcaseComponent} from './showcase/showcases/ino-chip-showcase/ino-chip-showcase.component';
import {InoChipSetShowcaseComponent} from './showcase/showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import {InoFabShowcaseComponent} from './showcase/showcases/ino-fab-showcase/ino-fab-showcase.component';
import {InoIconButtonShowcaseComponent} from './showcase/showcases/ino-icon-button-showcase/ino-icon-button-showcase.component';
import {InoSegmentButtonShowcaseComponent} from './showcase/showcases/ino-segment-button-showcase/ino-segment-button-showcase.component';
import {InoCardShowcaseComponent} from './showcase/showcases/ino-card-showcase/ino-card-showcase.component';
import {InoListShowcaseComponent} from './showcase/showcases/ino-list-showcase/ino-list-showcase.component';
import {InoDialogShowcaseComponent} from './showcase/showcases/ino-dialog-showcase/ino-dialog-showcase.component';
import {InoListItemShowcaseComponent} from './showcase/showcases/ino-list-item-showcase/ino-list-item-showcase.component';
import {InoMenuShowcaseComponent} from './showcase/showcases/ino-menu-showcase/ino-menu-showcase.component';
import {InoNavDrawerShowcaseComponent} from './showcase/showcases/ino-nav-drawer-showcase/ino-nav-drawer-showcase.component';
import {InoCarouselShowcaseComponent} from './showcase/showcases/ino-carousel-showcase/ino-carousel-showcase.component';
import {InoCheckboxShowcaseComponent} from './showcase/showcases/ino-checkbox-showcase/ino-checkbox-showcase.component';
import {InoDatepickerShowcaseComponent} from './showcase/showcases/ino-datepicker-showcase/ino-datepicker-showcase.component';
import {InoIconShowcaseComponent} from './showcase/showcases/ino-icon-showcase/ino-icon-showcase.component';
import {InoImgShowcaseComponent} from './showcase/showcases/ino-img-showcase/ino-img-showcase.component';
import {InoImgListShowcaseComponent} from './showcase/showcases/ino-img-list-showcase/ino-img-list-showcase.component';
import {InoInputShowcaseComponent} from './showcase/showcases/ino-input-showcase/ino-input-showcase.component';
import {InoInputFileShowcaseComponent} from './showcase/showcases/ino-input-file-showcase/ino-input-file-showcase.component';
import {InoPopoverShowcaseComponent} from './showcase/showcases/ino-popover-showcase/ino-popover-showcase.component';
import {InoProgressBarShowcaseComponent} from './showcase/showcases/ino-progress-bar-showcase/ino-progress-bar-showcase.component';
import {InoRadioShowcaseComponent} from './showcase/showcases/ino-radio-showcase/ino-radio-showcase.component';
import {InoRangeShowcaseComponent} from './showcase/showcases/ino-range-showcase/ino-range-showcase.component';
import {InoSelectShowcaseComponent} from './showcase/showcases/ino-select-showcase/ino-select-showcase.component';
import {InoSnackbarShowcaseComponent} from './showcase/showcases/ino-snackbar-showcase/ino-snackbar-showcase.component';
import {InoSpinnerShowcaseComponent} from './showcase/showcases/ino-spinner-showcase/ino-spinner-showcase.component';
import {InoSwitchShowcaseComponent} from './showcase/showcases/ino-switch-showcase/ino-switch-showcase.component';
import {InoTableShowcaseComponent} from './showcase/showcases/ino-table-showcase/ino-table-showcase.component';
import {InoTextareaShowcaseComponent} from './showcase/showcases/ino-textarea-showcase/ino-textarea-showcase.component';
import {InoTooltipShowcaseComponent} from './showcase/showcases/ino-tooltip-showcase/ino-tooltip-showcase.component';
import {InoTabBarShowcaseComponent} from './showcase/showcases/ino-tab-bar-showcase/ino-tab-bar-showcase.component';
import {InoTabShowcaseComponent} from './showcase/showcases/ino-tab-showcase/ino-tab-showcase.component';
import {InoHeaderShowcaseComponent} from './showcase/showcases/ino-header-showcase/ino-header-showcase.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  {
    path: 'showcase',
    loadChildren: () =>
      import('./showcase/showcase.module').then((m) => m.ShowcaseModule)
  }
];

const routerOptions: ExtraOptions = {
};

@NgModule({
  imports: [ RouterModule.forRoot(routes, routerOptions) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
