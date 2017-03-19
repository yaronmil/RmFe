import {Component, OnInit} from '@angular/core';
import {process} from "../../models/shared/process";
import {gridColumn} from "../../models/client/gridcolumn";
import {Observable} from "rxjs";
import * as appStore from '../../store/reducers';

import * as processesActions from '../../store/actions/processesactions';

import {Store} from "@ngrx/store";
import {ITdDataTableColumn} from "@covalent/core";

@Component({
  selector: 'app-processes-grid',
  /*template: '<app-grid [data]="processesList$ | async" [columns]="processGridColumns"></app-grid>'*/
  templateUrl: './processes-grid.component.html',

})
export class ProcessesGridComponent implements OnInit {

  processesList$: Observable<process[]>;

  processGridColumns: ITdDataTableColumn[] = [
    { name: 'id',  label: 'סידורי', sortable:true , numeric:true,tooltip:"סידורי"},
    { name: 'name',  label: 'שם תהליך', sortable:true },
    { name: 'map',  label: 'מפה', sortable:true },
    { name: 'units',  label: 'יחידות', sortable:true },
    { name: 'desc',  label: 'תיאור', sortable:true },
    { name: 'status',  label: 'סטטוס', sortable:true },
    { name: 'color',  label: 'צבע', sortable:true },
    {name:'editButton',label:'עריכה'},
    {name:'delButton',label:'מחק'}
   /* {
      header: "שם תהליך",
      field: "name"
    },
    {
      header: "מפה",
      field: "map"
    },
    {
      header: "יחידות",
      field: "units"
    },
    {
      header: "תיאור",
      field: "desc"
    }
    ,
    {
      header: "סטטוס",
      field: "status"
    }
    ,
    {
      header: "צבע",
      field: "color"
    }*/
  ]

  constructor(private store: Store<appStore.AppState>) {

    this.processesList$ = store.select(appStore.getProcessesList);
    store.dispatch(new processesActions.LoadProcessesAction());
    /*store.subscribe(d=>console.log("ssssss",d));*/

  }
  deleteRow(row:process)
  {
   this.store.dispatch(new processesActions.DeleteProcess(row));
  }
  selectEvent(event){
    console.log("fffffffffffff");
  }

  ngOnInit() {
  }

}

