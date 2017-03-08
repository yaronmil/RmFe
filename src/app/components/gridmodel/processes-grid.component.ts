import { Component, OnInit } from '@angular/core';
import {process} from "../../models/bll/process";
import {gridColumn} from "../../models/gridColumn";
import {ProcessesService} from "../../services/process.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-processes-grid',
  template : '<app-grid [data]="processesList$ | async" [columns]="processGridColumns"></app-grid>'

})
export class ProcessesGridComponent implements OnInit {

  processesList$:Observable<process[]>;

  processGridColumns:gridColumn[]=[{
    header:"סידורי",
    field:"id"
  },
    {
      header:"שם תהליך",
      field:"name"
    },
    {
      header:"יחידות",
      field:"units"
    },
    {
      header:"תיאור",
      field:"desc"
    }
    ,
    {
      header:"סטטוס",
      field:"status"
    }
    ,
    {
      header:"צבע",
      field:"color"
    }
  ]
  constructor(private processesService:ProcessesService) {
    this.processesList$= processesService.loadServices();
  }

  ngOnInit() {
  }

}
