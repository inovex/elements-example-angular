import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  styleUrls: ['./divider.component.scss'],
  template: `
  <div class="divider"></div>
  `
})
export class DividerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
