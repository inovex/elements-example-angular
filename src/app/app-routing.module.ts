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
import {InoImgShowcaseComponent} from './showcases/ino-img-showcase/ino-img-showcase.component';
import {InoImgListShowcaseComponent} from './showcases/ino-img-list-showcase/ino-img-list-showcase.component';
import {InoInputShowcaseComponent} from './showcases/ino-input-showcase/ino-input-showcase.component';
import {InoInputFileShowcaseComponent} from './showcases/ino-input-file-showcase/ino-input-file-showcase.component';
import {InoPopoverShowcaseComponent} from './showcases/ino-popover-showcase/ino-popover-showcase.component';
import {InoProgressBarShowcaseComponent} from './showcases/ino-progress-bar-showcase/ino-progress-bar-showcase.component';
import {InoRadioShowcaseComponent} from './showcases/ino-radio-showcase/ino-radio-showcase.component';
import {InoRangeShowcaseComponent} from './showcases/ino-range-showcase/ino-range-showcase.component';
import {InoSelectShowcaseComponent} from './showcases/ino-select-showcase/ino-select-showcase.component';
import {InoSnackbarShowcaseComponent} from './showcases/ino-snackbar-showcase/ino-snackbar-showcase.component';
import {InoSpinnerShowcaseComponent} from './showcases/ino-spinner-showcase/ino-spinner-showcase.component';
import {InoSwitchShowcaseComponent} from './showcases/ino-switch-showcase/ino-switch-showcase.component';
import {InoTableShowcaseComponent} from './showcases/ino-table-showcase/ino-table-showcase.component';
import {InoTextareaShowcaseComponent} from './showcases/ino-textarea-showcase/ino-textarea-showcase.component';
import {InoTooltipShowcaseComponent} from './showcases/ino-tooltip-showcase/ino-tooltip-showcase.component';
import {InoTabBarShowcaseComponent} from './showcases/ino-tab-bar-showcase/ino-tab-bar-showcase.component';
import {InoTabShowcaseComponent} from './showcases/ino-tab-showcase/ino-tab-showcase.component';

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
  { path: 'showcase/ino-img', component: InoImgShowcaseComponent },
  { path: 'showcase/ino-img-list', component: InoImgListShowcaseComponent },
  { path: 'showcase/ino-input', component: InoInputShowcaseComponent },
  { path: 'showcase/ino-input-file', component: InoInputFileShowcaseComponent },
  { path: 'showcase/ino-popover', component: InoPopoverShowcaseComponent },
  { path: 'showcase/ino-progress-bar', component: InoProgressBarShowcaseComponent },
  { path: 'showcase/ino-radio', component: InoRadioShowcaseComponent },
  { path: 'showcase/ino-range', component: InoRangeShowcaseComponent },
  { path: 'showcase/ino-select', component: InoSelectShowcaseComponent },
  { path: 'showcase/ino-snackbar', component: InoSnackbarShowcaseComponent },
  { path: 'showcase/ino-spinner', component: InoSpinnerShowcaseComponent },
  { path: 'showcase/ino-switch', component: InoSwitchShowcaseComponent },
  { path: 'showcase/ino-table', component: InoTableShowcaseComponent },
  { path: 'showcase/ino-textarea', component: InoTextareaShowcaseComponent },
  { path: 'showcase/ino-tooltip', component: InoTooltipShowcaseComponent },
  { path: 'showcase/ino-tab-bar', component: InoTabBarShowcaseComponent },
  { path: 'showcase/ino-tab', component: InoTabShowcaseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
