import {Component, OnInit} from '@angular/core';
import {process} from "../../models/shared/process";
import {Observable} from "rxjs";
import * as appStore from '../../store/reducers';
import {MdDialog,MdDialogRef} from '@angular/material';

import * as processesActions from '../../store/actions/processesactions';

import {Store} from "@ngrx/store";
import {ITdDataTableColumn} from "@covalent/core";
import {ProcessDialogComponent} from "../unitsnav/processes-view/process-dialog/process-dialog.component";
import {orgUnitsPipe} from "../../pipes/orgunits-pipe";


@Component({
  selector: 'app-processes-grid',
  templateUrl: './processes-grid.component.html',
  providers: [orgUnitsPipe]

})
export class ProcessesGridComponent implements OnInit {

  dialogRef: MdDialogRef<ProcessDialogComponent>;
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

  ]

  constructor(
    private fltr:orgUnitsPipe,
    public dialog: MdDialog,
    private store: Store<appStore.AppState>) {
fltr=new orgUnitsPipe();
    this.processesList$ = store.select(appStore.getProcessesList);
    store.dispatch(new processesActions.LoadProcessesAction());
    /*store.subscribe(d=>console.log("ssssss",d));*/

  }
  deleteRow(process:process)
  {
   this.store.dispatch(new processesActions.DeleteProcess(process));
  }
/*  selectEvent(event){
    console.log("fffffffffffff");
  }*/
aaa(v)
{
  return this.fltr.transform(v)

}
  editProcess(process:process) {
    this.store.dispatch(new processesActions.EditProcess(process));
  }
 /* popProcessEditor(process:process)
  {
    this.dialogRef= this.dialog.open(ProcessDialogComponent, {
        height: '650px',
        width: '600px',
        disableClose:true
      }
    );

  }*/
  ngOnInit() {
  }

}

