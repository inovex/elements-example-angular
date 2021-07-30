import {RouterModule, Routes} from '@angular/router';
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
import {InoHeaderShowcaseComponent} from './showcases/ino-header-showcase/ino-header-showcase.component';
import {ShowcaseComponent} from './showcase.component';
import {NgModule} from '@angular/core';
import {InoSidebarShowcaseComponent} from './showcases/ino-sidebar-showcase/ino-sidebar-showcase.component';


const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      { path: 'ino-button', component: InoButtonShowcaseComponent },
      { path: 'ino-chip', component: InoChipShowcaseComponent },
      { path: 'ino-chip-set', component: InoChipSetShowcaseComponent },
      { path: 'ino-fab', component: InoFabShowcaseComponent },
      { path: 'ino-icon-button', component: InoIconButtonShowcaseComponent },
      { path: 'ino-segment-button', component: InoSegmentButtonShowcaseComponent },
      { path: 'ino-card', component: InoCardShowcaseComponent },
      { path: 'ino-list', component: InoListShowcaseComponent },
      { path: 'ino-dialog', component: InoDialogShowcaseComponent },
      { path: 'ino-list-item', component: InoListItemShowcaseComponent },
      { path: 'ino-menu', component: InoMenuShowcaseComponent },
      { path: 'ino-nav-drawer', component: InoNavDrawerShowcaseComponent },
      { path: 'ino-carousel', component: InoCarouselShowcaseComponent },
      { path: 'ino-checkbox', component: InoCheckboxShowcaseComponent },
      { path: 'ino-datepicker', component: InoDatepickerShowcaseComponent },
      { path: 'ino-icon', component: InoIconShowcaseComponent },
      { path: 'ino-img', component: InoImgShowcaseComponent },
      { path: 'ino-img-list', component: InoImgListShowcaseComponent },
      { path: 'ino-input', component: InoInputShowcaseComponent },
      { path: 'ino-input-file', component: InoInputFileShowcaseComponent },
      { path: 'ino-popover', component: InoPopoverShowcaseComponent },
      { path: 'ino-progress-bar', component: InoProgressBarShowcaseComponent },
      { path: 'ino-radio', component: InoRadioShowcaseComponent },
      { path: 'ino-range', component: InoRangeShowcaseComponent },
      { path: 'ino-select', component: InoSelectShowcaseComponent },
      { path: 'ino-snackbar', component: InoSnackbarShowcaseComponent },
      { path: 'ino-spinner', component: InoSpinnerShowcaseComponent },
      { path: 'ino-switch', component: InoSwitchShowcaseComponent },
      { path: 'ino-table', component: InoTableShowcaseComponent },
      { path: 'ino-textarea', component: InoTextareaShowcaseComponent },
      { path: 'ino-tooltip', component: InoTooltipShowcaseComponent },
      { path: 'ino-tab-bar', component: InoTabBarShowcaseComponent },
      { path: 'ino-tab', component: InoTabShowcaseComponent },
      { path: 'ino-header', component: InoHeaderShowcaseComponent },
      { path: 'ino-sidebar', component: InoSidebarShowcaseComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShowcaseRoutingModule { }
