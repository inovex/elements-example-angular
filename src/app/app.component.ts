import { Component } from '@angular/core';
import 'core-js/features/reflect';
import {NavigationItem} from './navigation/navigation.component'; // fix for codesandbox

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: NavigationItem[] = [
    {
      text: 'Showcase',
      url: 'showcase',
      exactMatch: true,
      icon: 'star',
    },
    {
      text: 'ToDo List',
      url: 'todo-list',
      icon: 'checkmark',
    },
  ];
}
