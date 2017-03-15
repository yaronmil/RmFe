import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromProcesses from './processesReducer';
import * as fromOrgUnits from './orgunitsReducer';
import {RouterState, routerReducer} from "@ngrx/router-store";


export interface AppState {
  router: RouterState;
  processes:fromProcesses.State;
  orgUnits:fromOrgUnits.State

}

const reducers = {
  router:routerReducer,
  processes: fromProcesses.reducer,
  orgUnits:fromOrgUnits.reducer
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

export const getProcessesState = (state: AppState) => state.processes;
export const getProcessesList = createSelector(getProcessesState, fromProcesses.getProcessesList);


export const getOrgUnitsState = (state: AppState) => state.orgUnits;
export const getOrgUnitsList = createSelector(getOrgUnitsState, fromOrgUnits.getorgUnitsList);
export const getOrgUnitsTree = createSelector(getOrgUnitsState, fromOrgUnits.getorgUnitsTree);

export const getDialogOpen = createSelector(getProcessesState, fromProcesses.getDialogOpen);
/*export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);*/
