/**
 * Created by Yaron on 3/8/2017.
 */

import {process} from "../../models/bll/process";
import * as processesActions      from "../actions/processesActions"
import {Action} from '@ngrx/store';

export interface State {
  processesList: process[];
}
const initialState: State = {

  processesList: [{
    color: "red",
    id: 1,
    name: "sss",
    units: "dsds",
    desc: "dsds",
    resp: "fff",
    staus: "dsds",

  }]
}


export function reducer(state = initialState, action: processesActions.Actions): State {
  switch (action.type) {
    case processesActions.LOAD_PROCESSES:
      return state;
    case processesActions.CREATE_PROCESS:
      return state;
    case processesActions.PROCESS_CREATED:
      const newProcess=(action as Action).payload ;
      const processesList=[...state.processesList,...newProcess]
      return Object.assign({},state,{processesList});
    case processesActions.PROCESSES_LOADED:
      return {
        processesList: (action as Action).payload
      }
    default :
      return state;
  }
}
export const getProcessesList = (state: State) => state.processesList;
