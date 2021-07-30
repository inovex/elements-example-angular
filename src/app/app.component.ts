import { Component } from '@angular/core';
import 'core-js/features/reflect';
import {NavigationItem} from './navigation/navigation.component'; // fix for codesandbox

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: NavigationItem[] = [
    {
      text: 'ToDo List',
      url: 'todo-list',
    },
    {
      text: 'Ino-Button',
      url: 'showcase/ino-button'
    },
    {
      text: 'Ino-Card',
      url: 'showcase/ino-card'
    },
    {
      text: 'Ino-Carousel',
      url: 'showcase/ino-carousel'
    },
    {
      text: 'Ino-Checkbox',
      url: 'showcase/ino-checkbox'
    },
    {
      text: 'Ino-Chip-Set',
      url: 'showcase/ino-chip-set'
    },
    {
      text: 'Ino-Chip',
      url: 'showcase/ino-chip'
    },
    {
      text: 'Ino-Datepicker',
      url: 'showcase/ino-datepicker'
    },
    {
      text: 'Ino-Dialog',
      url: 'showcase/ino-dialog'
    },
    {
      text: 'Ino-Fab',
      url: 'showcase/ino-fab'
    },
    {
      text: 'Ino-Header',
      url: 'showcase/ino-header'
    },
    {
      text: 'Ino-Icon-Button',
      url: 'showcase/ino-icon-button'
    },
    {
      text: 'Ino-Icon',
      url: 'showcase/ino-icon'
    },
    {
      text: 'Ino-Img-List',
      url: 'showcase/ino-img-list'
    },
    {
      text: 'Ino-Img',
      url: 'showcase/ino-img'
    },
    {
      text: 'Ino-Input-File',
      url: 'showcase/ino-input-file'
    },
    {
      text: 'Ino-Input',
      url: 'showcase/ino-input'
    },
    {
      text: 'Ino-List-Item',
      url: 'showcase/ino-list-item'
    },
    {
      text: 'Ino-List',
      url: 'showcase/ino-list'
    },
    {
      text: 'Ino-Menu',
      url: 'showcase/ino-menu'
    },
    {
      text: 'Ino-Nav-Drawer',
      url: 'showcase/ino-nav-drawer'
    },
    {
      text: 'Ino-Popover',
      url: 'showcase/ino-popover'
    },
    {
      text: 'Ino-Progress-Bar',
      url: 'showcase/ino-progress-bar'
    },
    {
      text: 'Ino-Radio',
      url: 'showcase/ino-radio'
    },
    {
      text: 'Ino-Range',
      url: 'showcase/ino-range'
    },
    {
      text: 'Ino-Segment-Button',
      url: 'showcase/ino-segment-button'
    },
    {
      text: 'Ino-Select',
      url: 'showcase/ino-select'
    },
    {
      text: 'Ino-Sidebar',
      url: 'showcase/ino-sidebar'
    },
    {
      text: 'Ino-Snackbar',
      url: 'showcase/ino-snackbar'
    },
    {
      text: 'Ino-Spinner',
      url: 'showcase/ino-spinner'
    },
    {
      text: 'Ino-Switch',
      url: 'showcase/ino-switch'
    },
    {
      text: 'Ino-Tab-Bar',
      url: 'showcase/ino-tab-bar'
    },
    {
      text: 'Ino-Tab',
      url: 'showcase/ino-tab'
    },
    {
      text: 'Ino-Table',
      url: 'showcase/ino-table'
    },
    {
      text: 'Ino-Textarea',
      url: 'showcase/ino-textarea'
    },
    {
      text: 'Ino-Tooltip',
      url: 'showcase/ino-tooltip'
    }
  ];
}
