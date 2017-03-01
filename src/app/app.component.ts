import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: Object[] = [{
    title: 'Dashboard',
    route: './dashboard',
    icon: 'dashboard',
  }, {
    title: 'עץ יחידות',
    route: './navframe',
    icon: 'view_quilt',
  }, {
    title: 'עץ תהליכים',
    route: '/faults',
    icon: 'receipt',
  }, {
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
