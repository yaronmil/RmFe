import {Component, OnInit} from '@angular/core';
import {single, multi} from '../../../services/data';
import {MdDialog,MdDialogRef} from '@angular/material';
import {ProcessDialogComponent} from "./process-dialog/process-dialog.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/reducers/index";
import {ProcessDialogOpen} from "../../../store/actions/processesactions";
import {Observable} from "rxjs";

import * as appStore from '../../../store/reducers';


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

  constructor(public dialog: MdDialog,
              public store: Store<AppState>) {

    store.select(appStore.getDialogOpen).do(
      ret => {
        ret? this.popDialog():this.closeDialog();
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

  }

  addProcess() {
    this.store.dispatch(new ProcessDialogOpen())

  }
  popDialog() {

    this.dialogRef= this.dialog.open(ProcessDialogComponent, {
        height: '650px',
        width: '600px',
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

