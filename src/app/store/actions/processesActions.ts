/**
 * Created by Yaron on 3/8/2017.
 */
import {Action} from '@ngrx/store';
import {process} from "../../models/shared/process";


export const LOAD_PROCESSES = '[Processes] LOAD PROCESSES';
export const PROCESSES_LOADED = '[Processes] PROCESSES LOADED';
export const CREATE_PROCESS = '[Processes] CREATE PROCESS';
export const PROCESS_MANUALY_CREATED = '[Processes] PROCESS MANUALY CREATED';
export const PROCESS_CREATED = '[Processes] PROCESS CREATED';
export const PROCESS_DIALOG_OPEN_CREATE = '[Processes] PROCESS DIALOG OPEN CREATE';
export const PROCESS_DIALOG_OPEN_EDIT = '[Processes] PROCESS DIALOG OPEN EDIT';
export const PROCESS_EDIT_SAVE = '[Processes] PROCESS EDIT SAVE';
export const EDITED_PROCESS_SAVED = '[Processes] EDIT PROCESS SAVED';
export const PROCESS_DIALOG_CLOSE = '[Processes] PROCESS DIALOG CLOSE';
export const DELETE_PROCESS = '[Processes] DELETE PROCESS';
export const PROCESS_DELETED = '[Processes] PROCESS DELETED';


export class LoadProcessesAction implements Action {

  readonly type = LOAD_PROCESSES;

  constructor() {

  }

}
export class DeleteProcess implements Action {

  readonly type = DELETE_PROCESS;

  constructor(public payload: process) {

  }
}
export class ProcessDeleted implements Action {

  readonly type = PROCESS_DELETED;

  constructor() {

  }
}
export class EditProcess implements Action {

  readonly type = PROCESS_DIALOG_OPEN_EDIT;


  constructor(public payload: process) {

  }

}
export class ProcessEditSave implements Action {

  readonly type = PROCESS_EDIT_SAVE;


  constructor(public payload: process) {

  }

}
export class EditedProcessSaved implements Action {

  readonly type = EDITED_PROCESS_SAVED;


  constructor(public payload: process) {

  }

}
export class ProcessesLoaded implements Action {

  readonly type = PROCESSES_LOADED;


  constructor(public payload: process[]) {

  }

}

export class CreateAction implements Action {

  readonly type = CREATE_PROCESS;

  constructor(public payload: process) {

  }

}
export class ProcessCreated implements Action {

  readonly type = PROCESS_CREATED;

  constructor(public payload: process) {
  }

}
export class ProcessDialogOpenCreate implements Action {

  readonly type = PROCESS_DIALOG_OPEN_CREATE;

  constructor() {
  }

}
export class ProcessDialogClose implements Action {

  readonly type = PROCESS_DIALOG_CLOSE;

  constructor() {
  }

}
export class ProcessManualyCreated implements Action {

  readonly type = PROCESS_MANUALY_CREATED;

  constructor(public payload: process) {
  }

}
export type Actions
  = LoadProcessesAction | ProcessesLoaded |CreateAction |ProcessCreated | ProcessDialogOpenCreate|EditProcess|ProcessDialogClose|ProcessManualyCreated|ProcessEditSave |EditedProcessSaved;


