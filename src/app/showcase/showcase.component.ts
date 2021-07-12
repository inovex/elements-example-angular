import {Component, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  @Input() component: string;

  ngOnInit(): void {

  }
}
