import {Component, OnInit} from '@angular/core';
import {single, multi} from '../../../services/data';
import {MdDialog,MdDialogRef} from '@angular/material';
import {ProcessDialogComponent} from "./process-dialog/process-dialog.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/reducers/index";
import {ProcessDialogOpenCreate} from "../../../store/actions/processesactions";
import {Observable} from "rxjs";

import * as appStore from '../../../store/reducers';
import {OpenCloseEnum} from "../../../../enums/opencloseenum";
import {process} from "../../../models/shared/process";


@Component({
  selector: 'app-processes-view',
  templateUrl: './processes-view.component.html',
  styleUrls: ['./processes-view.component.css']
})
export class ProcessesViewComponent implements OnInit {
  dialogRef: MdDialogRef<ProcessDialogComponent>;

  /*openDialog$:Observable<boolean>;*/
  single: any[];
  multi: any[];

  chart2:any[]=[
    {
      "name": "אדום",
      "series": [
        {
          "value": 5,
          "name": "< חצי שנה"
        },
        {
          "value": 2,
          "name": "<חודש"
        },
        {
          "value": 1,
          "name": "ממתין"
        },
        {
          "value": 7,
          "name": "סגור"
        }

      ]
    },
    {
      "name": "כתום",
      "series": [
        {
          "value": 1,
          "name": "< חצי שנה"
        },
        {
          "value": 2,
          "name": "<חודש"
        },
        {
          "value": 3,
          "name": "ממתין"
        },
        {
          "value": 7,
          "name": "סגור"
        }

      ]
    },
    {
      "name": "ירוק",
      "series": [
        {
          "value":8,
          "name": "< חצי שנה"
        },
        {
          "value": 2,
          "name": "<חודש"
        },
        {
          "value": 0,
          "name": "ממתין"
        },
        {
          "value": 1,
          "name": "סגור"
        }

      ]
    }
  ]
  chart1:any[]=[
    {
      'name': 'אדום',
      'value': 5
    },
    {
      'name': 'כתום',
      'value': 3
    },
    {
      'name': 'ירוק',
      'value':8,
    }
    ];
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
  colorScheme1: any = {
    domain: ['red', 'orange', 'green'],
  };


  colorSchemeDark: any = {
    domain: ['#5E35B1', '#0277BD', '#00695C', '#558B2F', '#9E9D24'],
  };

  constructor(public dialog: MdDialog,
              public store: Store<AppState>) {

     store.select(appStore.getProcessesDialogState).do(
     state => {
     state==OpenCloseEnum.close? this.closeDialog():this.popDialog();
     }).subscribe();



    Object.assign(this, {single});
    // Chart
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
    console.log("multi",multi);

  }

  addProcess() {
    this.store.dispatch(new ProcessDialogOpenCreate())
  }

  popDialog() {
    this.dialogRef= this.dialog.open(ProcessDialogComponent, {
        height: '700px',

        disableClose:true
      }
    );

  }
  closeDialog(){
    if( this.dialogRef)
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}

