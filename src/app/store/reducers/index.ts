import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromProcesses from './processesReducer';
import * as fromOrgUnits from './orgunitsReducer';
import * as fromUsers from './usersReducer';
import {RouterState, routerReducer} from "@ngrx/router-store";
import {orgUnit} from "../../models/shared/orgUnit";



export interface AppState {
  router: RouterState;
  processes:fromProcesses.State;
  orgUnits:fromOrgUnits.State;
  users:fromUsers.State;

}

const reducers = {
  router:routerReducer,
  processes: fromProcesses.reducer,
  orgUnits:fromOrgUnits.reducer,
  users:fromUsers.reducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
/*processes*/
export const getProcessesState = (state: AppState) => state.processes;
export const getProcessesList = createSelector(getProcessesState, fromProcesses.getProcessesList);
export const getProcessesDialogState = createSelector(getProcessesState, fromProcesses.getProcessesDialogState);
export const getProcessToEdit = createSelector(getProcessesState, fromProcesses.getProcessToEdit);

/*orgunits*/
export const getOrgUnitsState = (state: AppState) => state.orgUnits;
/*export const getOrgUnitsList = createSelector<AppState,orgUnit[],fromOrgUnits.State>( getOrgUnitsState, fromOrgUnits.getorgUnitsList)*/
export const getOrgUnitsList = createSelector ( getOrgUnitsState, fromOrgUnits.getorgUnitsList)
export const getOrgUnitsTree = createSelector(getOrgUnitsState,fromOrgUnits.getorgUnitsTree);

/*users*/
export const getUsersState = (state: AppState) => state.users;
export const getUsersList = createSelector(getUsersState, fromUsers.getorgUsersList);

