import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

export interface NavigationItem {
  text: string;
  url: string;
  exactMatch?: boolean;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  @Input() navBarExpanded = false;
  @Input() navItems: NavigationItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  toggleNavBar(): void {
    this.navBarExpanded = !this.navBarExpanded;
  }

  onNavIconClick(): void {
    this.router.navigate(['']);
  }
}
