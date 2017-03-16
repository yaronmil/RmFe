import {Component, OnInit} from '@angular/core';
import {process} from "../../models/shared/process";
import {gridColumn} from "../../models/client/gridcolumn";
import {Observable} from "rxjs";
import * as appStore from '../../store/reducers';

import * as processesActions from '../../store/actions/processesactions';

import {Store} from "@ngrx/store";

@Component({
  selector: 'app-processes-grid',
  template: '<app-grid [data]="processesList$ | async" [columns]="processGridColumns"></app-grid>'

})
export class ProcessesGridComponent implements OnInit {

  processesList$: Observable<process[]>;

  processGridColumns: gridColumn[] = [{
    header: "סידורי",
    field: "id"
  },
    {
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
    }
  ]

  constructor(private store: Store<appStore.AppState>) {

    this.processesList$ = store.select(appStore.getProcessesList);
    store.dispatch(new processesActions.LoadProcessesAction());
    /*store.subscribe(d=>console.log("ssssss",d));*/

  }

  ngOnInit() {
  }

}
