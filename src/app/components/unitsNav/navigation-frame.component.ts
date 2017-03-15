import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {TdLayoutComponent} from "@covalent/core";
import {single, multi} from '../../services/data';
import {process} from "../../models/shared/process";
export interface tile {
  header: string
  colspan: number
}

@Component({
  selector: 'app-navigation-frame',
  templateUrl: './navigation-frame.component.html',
  styleUrls: ['./navigation-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationFrameComponent implements OnInit {


  /* @ViewChild('navframelayout') navframelayout: TdLayoutComponent;*/

  // Chart
  single: any[];
  multi: any[];
  gridData:any[]= [{
    "ProductID": 1,
    "ProductName": "Chai",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "10 boxes x 20 bags",
    "UnitPrice": 18.0000,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
  }, {
    "ProductID": 2,
    "ProductName": "Chang",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 19.0000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
  }]
  view: any[] = [350, 200];


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

  public totFaultsXlable(x: Date): string {
    return (x.getMonth() + 1) + "/" + x.getFullYear().toString().substr(2, 2);
  }

  ngOnInit() {
  }

}
