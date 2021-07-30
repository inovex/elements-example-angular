import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-ino-button-showcase',
  templateUrl: './ino-button-showcase.component.html',
  styleUrls: ['./ino-button-showcase.component.scss']
})
export class InoButtonShowcaseComponent {

  @HostListener('submit', ['$event'])
  private onSubmit(e: Event) {
    e.preventDefault();
    window.alert('Form submitted!');
  }

}
