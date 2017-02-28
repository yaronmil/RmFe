import { Component } from '@angular/core';

import { single, multi } from './data';
import {ITdDataTableColumn} from "@covalent/core";

@Component({
  selector: 'qs-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardTemplateComponent {
  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'כמות תקלות';

  colorScheme: any = {
    domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
  };

  colorSchemeDark: any = {
    domain: ['#5E35B1', '#0277BD', '#00695C', '#558B2F', '#9E9D24'],
  };

  // line, area
  autoScale: boolean = true;

  constructor() {
    // Cards

    Object.assign(this, {single});
    // Chart
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }
  public totFaultsXlable(x:Date):string{
    return (x.getMonth()+1)+"/"+x.getFullYear().toString().substr(2,2);
  }


  columns: ITdDataTableColumn[] = [
    {name: 'food.name', label: 'תאריך'},
    {name: 'food.type', label: 'תיאור'},
    {name: 'calories', label: 'משך', numeric: true   },
    {name: 'fat', label: 'תחקיר', numeric: true   }

  ];
  columns1: ITdDataTableColumn[] = [
    {name: 'food.name', label: 'תאריך'},
    {name: 'food.type', label: 'מקור'},
    {name: 'food.fat', label: 'תיאור'},
    {name: 'calories', label: 'משך', numeric: true   },


  ];
  basicData: any[] = [
    {
      'id': 1,
      'food': {
        'name': '01/01/2017',
        'type': 'תקלללהה',
      },
      'calories': 50,
      'fat':'כן',
      'carbs': 24.0,
      'protein': 4.0,
      'sodium': 87.0,
      'calcium': 14.0,
      'iron': 1.0,
      'comments': 'I love froyo!',
    }, {
      'id': 2,
      'food': {
        'name': '01/01/2017',
        'type': 'תקלללהה',
      },
      'calories': 50,
      'fat': 9.0,
      'carbs': 37.0,
      'protein': 4.3,
      'sodium': 129.0,
      'calcium': 8.0,
      'iron': 1.0,
    }, {
      'id': 3,
      'food': {
        'name': '01/01/2017',
        'type': 'תקלללהה',
      },
      'calories': 50,
      'fat': 16.0,
      'carbs': 24.0,
      'protein': 6.0,
      'sodium': 337.0,
      'calcium': 6.0,
      'iron': 7.0,
    },
  ];

  basicData1: any[] = [
    {
      'id': 1,
      'food': {
        'name': '01/01/2017',
        'type': 'מוקד',
      },
      'calories': 50,
      'fat':'כן',
      'carbs': 24.0,
      'protein': 4.0,
      'sodium': 87.0,
      'calcium': 14.0,
      'iron': 1.0,
      'comments': 'I love froyo!',
    }, {
      'id': 2,
      'food': {
        'name': '01/01/2017',
        'type': 'אבמ',
      },
      'calories': 50,
      'fat': 9.0,
      'carbs': 37.0,
      'protein': 4.3,
      'sodium': 129.0,
      'calcium': 8.0,
      'iron': 1.0,
    }, {
      'id': 3,
      'food': {
        'name': '01/01/2017',
        'type': 'אבמ',
      },
      'calories': 50,
      'fat': 16.0,
      'carbs': 24.0,
      'protein': 6.0,
      'sodium': 337.0,
      'calcium': 6.0,
      'iron': 7.0,
    },
  ];
}

