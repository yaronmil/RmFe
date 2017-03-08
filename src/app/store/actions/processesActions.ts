/**
 * Created by Yaron on 3/8/2017.
 */
import { Action } from '@ngrx/store';
import {process} from "../../models/bll/process";



export const  LOAD_PROCESSES =  '[Processes] LOAD PROCESSES';
export const  PROCESSES_LOADED =  '[Processes] PROCESSES LOADES';
export const  CREATE_PROCESS =  '[Processes] CREATE PROCESS';


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
export type Actions
  = LoadProcessesAction | ProcessesLoaded |CreateAction;


