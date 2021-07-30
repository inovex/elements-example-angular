import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-ino-nav-drawer-showcase',
  templateUrl: './ino-nav-drawer-showcase.component.html',
  styleUrls: ['./ino-nav-drawer-showcase.component.scss']
})
export class InoNavDrawerShowcaseComponent {

  drawerStates = [
    false,
    false,
    false
  ];

  @HostListener('openChange', ['$event'])
  onOpenChange(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleDrawer(drawerId: number) {
    if (drawerId in this.drawerStates) {
      (this.drawerStates)[drawerId] = !(this.drawerStates)[drawerId];
    }
  }

}
