import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseCardComponent implements OnInit {
  @Input() cardTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
