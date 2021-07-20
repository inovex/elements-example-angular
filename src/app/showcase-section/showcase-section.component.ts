import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-showcase-section',
  templateUrl: './showcase-section.component.html',
  styleUrls: ['./showcase-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseSectionComponent {
  @Input() title: string;
}
