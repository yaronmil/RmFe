/**
 * Created by Yaron on 3/8/2017.
 */

import {process} from "../../models/shared/process";
import * as processesActions      from "../actions/processesactions"
import {Action} from '@ngrx/store';
import {Actions} from "../actions/processesactions";
import {OpenCloseEnum} from "../../../enums/opencloseenum";


export interface State {
  processesList: process[];
  processToEdit: process;
  dialogState: OpenCloseEnum;

}
const initialState: State = {

  processesList: [],
  processToEdit: undefined,
  dialogState: OpenCloseEnum.close

}

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {
    case processesActions.PROCESS_DIALOG_OPEN_CREATE:
      return Object.assign({}, state, {dialogState: OpenCloseEnum.open},{processToEdit:null});

    case processesActions.PROCESS_DIALOG_OPEN_EDIT:
      const processToEdit = (<processesActions.EditProcess> action).payload;
      return Object.assign({}, state, {dialogState: OpenCloseEnum.open}, {processToEdit});

    case processesActions.PROCESS_EDIT_SAVE:
      return state;

    case processesActions.PROCESS_EDIT_SAVE:
      return state;

    case processesActions.EDITED_PROCESS_SAVED:
    {
      const editedprocess = (<processesActions.EditedProcessSaved> action).payload;
      var processesList=state.processesList.filter(pl => pl.id != editedprocess.id);

      processesList.push(editedprocess);
      return Object.assign({},
        state, {dialogState: OpenCloseEnum.close},
        {processesList});
    }
    case processesActions.PROCESS_DIALOG_CLOSE :
      return Object.assign({}, state, {dialogState: OpenCloseEnum.close});
    case processesActions.LOAD_PROCESSES:
      return state;
    case processesActions.CREATE_PROCESS:
      return state;
    case processesActions.PROCESS_CREATED: {
      const newProcess = (<processesActions.ProcessCreated> action).payload;
      const processesList = [...state.processesList, newProcess]
      return Object.assign({}, state, {processesList});
    }
    case processesActions.DELETE_PROCESS:
      const ProcessToDelete = (<processesActions.DeleteProcess> action).payload;

      return Object.assign({}, state, {processesList: state.processesList.filter(pl => pl.id != ProcessToDelete.id)});
    case processesActions.PROCESS_DELETED:
      return state;
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
export const getProcessesDialogState = (state: State) => state.dialogState;
export const getProcessToEdit = (state: State) => state.processToEdit;
