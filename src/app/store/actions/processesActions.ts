/**
 * Created by Yaron on 3/8/2017.
 */
import { Action } from '@ngrx/store';
import {process} from "../../models/bll/process";




export const  LOAD_PROCESSES =  '[Processes] LOAD PROCESSES';
export const  PROCESSES_LOADED =  '[Processes] PROCESSES LOADED';
export const  CREATE_PROCESS =  '[Processes] CREATE PROCESS';
export const PROCESS_MANUALY_CREATED =  '[Processes] PROCESS MANUALY CREATED';
export const  PROCESS_CREATED =  '[Processes] PROCESS CREATED';
export const  PROCESS_DIALOG_OPEN =  '[Processes] PROCESS DIALOG OPEN';
export const  PROCESS_DIALOG_CLOSE =  '[Processes] PROCESS DIALOG CLOSE';


export class LoadProcessesAction implements  Action {

  readonly type =LOAD_PROCESSES;

  constructor() {

  }

}
export class ProcessesLoaded implements  Action {

  readonly type = PROCESSES_LOADED;


  constructor(public payload:process[]) {

  }

}

export class CreateAction implements  Action {

  readonly type =  CREATE_PROCESS;

  constructor(public payload:process) {

  }

}
export class ProcessCreated implements  Action{

  readonly type=PROCESS_CREATED;
  constructor(public payload:process){}

}
export class ProcessDialogOpen implements  Action{

  readonly type=PROCESS_DIALOG_OPEN;
  constructor(){}

}
export class ProcessDialogClose implements  Action{

  readonly type=PROCESS_DIALOG_CLOSE;
  constructor(){}

}
export class ProcessManualyCreated  implements  Action{

  readonly type=PROCESS_MANUALY_CREATED;
  constructor(public payload:process){}

}
export type Actions
  = LoadProcessesAction | ProcessesLoaded |CreateAction |ProcessCreated | ProcessDialogOpen|ProcessDialogClose|ProcessManualyCreated;


