import {Component, ViewEncapsulation} from '@angular/core';
import ICONS from './icons';

@Component({
  selector: 'app-ino-icon-showcase',
  templateUrl: './ino-icon-showcase.component.html',
  styleUrls: ['./ino-icon-showcase.component.scss']
})
export class InoIconShowcaseComponent {
  icons = ICONS.filter((icon) => !icon.startsWith('_'));
}
