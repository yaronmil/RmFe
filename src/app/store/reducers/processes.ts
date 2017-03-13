/**
 * Created by Yaron on 3/8/2017.
 */

import {process} from "../../models/bll/process";
import * as processesActions      from "../actions/processesActions"
import {Action} from '@ngrx/store';
import {Actions} from "../actions/processesActions";
import {MdDialog} from '@angular/material';
import {ProcessDialogComponent} from "../../components/unitsNav/processes-view/process-dialog/process-dialog.component";
import {ConfirmDialog} from "primeng/components/confirmdialog/confirmdialog";
import {MdDialogRef} from '@angular/material';

export interface State {
  processesList: process[];
  dialogOpen: boolean;
}
const initialState: State = {

  processesList: [],
  dialogOpen: false

}

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {
    case processesActions.PROCESS_DIALOG_OPEN:
      return Object.assign({}, state, {dialogOpen: true});
    case processesActions.PROCESS_DIALOG_CLOSE :
      return Object.assign({}, state, {dialogOpen: false});
    case processesActions.LOAD_PROCESSES:
      return state;
    case processesActions.CREATE_PROCESS:
      return state;
    case processesActions.PROCESS_CREATED: {
      const newProcess = (<processesActions.CreateAction> action).payload;
      const processesList = [...state.processesList, newProcess]
      return Object.assign({}, state, {processesList});
    }
    case processesActions.PROCESSES_LOADED: {
      const processesList = (action as Action).payload;
      return Object.assign({}, state, {processesList});
      /*{
       processesList: (action as Action).payload
       }*/
    }
    default :
      return state;
  }
}
export const getProcessesList = (state: State) => state.processesList;
export const getDialogOpen = (state: State) => state.dialogOpen;
