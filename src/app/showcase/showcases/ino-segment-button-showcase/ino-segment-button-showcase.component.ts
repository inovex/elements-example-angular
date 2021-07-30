import { Component } from '@angular/core';

@Component({
  selector: 'app-ino-segment-button-showcase',
  templateUrl: './ino-segment-button-showcase.component.html',
  styleUrls: ['./ino-segment-button-showcase.component.scss']
})
export class InoSegmentButtonShowcaseComponent {
  groupValues = [1, 2];

  onCheckedChange(groupId: number, newVal: number) {
    if (groupId in this.groupValues) {
      this.groupValues[groupId] = newVal;
    }
  }
}
