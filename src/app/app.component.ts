import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: Object[] = [
    {
    title: 'Dashboard',
    route: './dashboard',
    icon: 'dashboard',
  },
    {
      title: 'משימות',
      route: './dashboard',
      icon: 'build',
    },
    {
    title: 'עץ יחידות',
    route: './navframe',
    icon: 'view_list',
  }, {
    title: 'עץ תהליכים',
    route: '/faults',
    icon: 'receipt',
  }, {
    title: 'דוחות',
    route: '/אבמ',
    icon: 'pie_chart',
  },
    {
      title: 'ניהול',
      route: '/אבמ',
      icon: 'people',
    },
    {
      title: 'testim',
      route: '/test',
      icon: 'view_module',
    }

  ];
}
