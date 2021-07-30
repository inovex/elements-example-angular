import {Component, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ino-sidebar-showcase',
  templateUrl: './ino-sidebar-showcase.component.html',
  styleUrls: ['./ino-sidebar-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InoSidebarShowcaseComponent {
  sidebarOpen = false;

  @HostListener('openChange', ['$event'])
  private onOpenChange(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
