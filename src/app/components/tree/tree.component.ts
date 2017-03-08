import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {

  nodes = [
    {
      id: 1,
      name: 'עמיתים',
      selected:true,
      isExpanded: true,
      icon:'account_balance',
      children: [
        {
          id: 10,
          name: 'אופאל',
          isExpanded: true,
          children: [
            { id: 20, name: 'כספים',icon:"attach_money" },
            { id: 29, name: 'אבטחת מידע',icon:'security' },
            { id: 30, name: 'תוכנה' ,icon:'developer_mode'},
            { id: 31, name: 'פיתוח',icon:'developer_board' },
            { id: 32, name: 'תשתיות טכנולוגיות',icon:'settings_input_composite' },
            { id: 33, name: 'תפעול' ,icon:"settings"}
          ]
        },
        {
          id: 4,
          name: 'ביקורת פנימית',
          children: [

          ]
        },
        {
          id: 4,
          name: 'השקעות',
          isExpanded: true,
          children: [
            { id: 40, name: 'תחום א"\גח' },
            { id: 41, name: 'תחום בקרה וניתוח השקעות' },
            { id: 42, name: 'תחום מניות' },
            { id: 43, name: 'תחום לא סחיר' },
            { id: 44, name: 'תחום מחקר' },
            { id: 45, name: 'תחום ני"\ע וקופ"\ג' },
            { id: 46, name: 'יועצת משפטית' }
          ]
        }

      ]
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
