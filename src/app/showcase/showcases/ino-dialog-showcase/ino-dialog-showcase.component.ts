import {Component, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ino-dialog-showcase',
  templateUrl: './ino-dialog-showcase.component.html',
  styleUrls: ['./ino-dialog-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InoDialogShowcaseComponent {

  dialogOpen = false;

  @HostListener('openChange', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }


  toggleDialog() {
    this.dialogOpen = !this.dialogOpen;
  }

}
