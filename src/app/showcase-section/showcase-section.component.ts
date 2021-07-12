import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-showcase-section',
  templateUrl: './showcase-section.component.html',
  styleUrls: ['./showcase-section.component.scss']
})
export class ShowcaseSectionComponent {
  @Input() title: string;
}
