import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ino-card-showcase',
  templateUrl: './ino-card-showcase.component.html',
  styleUrls: ['./ino-card-showcase.component.scss']
})
export class InoCardShowcaseComponent {

  selected = false;
  selectedBtn: string[] = [
    null,
    null
  ];

  onClick() {
    this.selected = !this.selected;
  }

  onCheckedChange(groupId: number, value: string) {
    if (groupId in this.selectedBtn) {
      this.selectedBtn[groupId] = value;
    }
  }
}
