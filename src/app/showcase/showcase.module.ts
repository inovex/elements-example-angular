import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import {InoButtonShowcaseComponent} from './showcases/ino-button-showcase/ino-button-showcase.component';
import {InoChipShowcaseComponent} from './showcases/ino-chip-showcase/ino-chip-showcase.component';
import {InoChipSetShowcaseComponent} from './showcases/ino-chip-set-showcase/ino-chip-set-showcase.component';
import {ShowcaseSectionComponent} from './showcase-section/showcase-section.component';
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
import {InoSidebarShowcaseComponent} from './showcases/ino-sidebar-showcase/ino-sidebar-showcase.component';
import {SharedModule} from '../shared/shared.module';
import {InoElementsModule} from '@inovex.de/elements-angular';
import {ShowcaseRoutingModule} from './showcase-routing.module';

@NgModule({
  declarations: [
    ShowcaseComponent,
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
    InoNavDrawerShowcaseComponent,
    InoCarouselShowcaseComponent,
    InoCheckboxShowcaseComponent,
    InoDatepickerShowcaseComponent,
    InoIconShowcaseComponent,
    InoImgShowcaseComponent,
    InoImgListShowcaseComponent,
    InoInputShowcaseComponent,
    InoInputFileShowcaseComponent,
    InoPopoverShowcaseComponent,
    InoProgressBarShowcaseComponent,
    InoRadioShowcaseComponent,
    InoRangeShowcaseComponent,
    InoSelectShowcaseComponent,
    InoSnackbarShowcaseComponent,
    InoSpinnerShowcaseComponent,
    InoSwitchShowcaseComponent,
    InoTableShowcaseComponent,
    InoTextareaShowcaseComponent,
    InoTooltipShowcaseComponent,
    InoTabBarShowcaseComponent,
    InoTabShowcaseComponent,
    InoHeaderShowcaseComponent,
    InoSidebarShowcaseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InoElementsModule.forRoot(),
    ShowcaseRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowcaseModule { }