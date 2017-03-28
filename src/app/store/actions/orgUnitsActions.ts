/**
 * Created by Yaron on 3/8/2017.
 */
import { Action } from '@ngrx/store';
import {orgUnit} from "../../models/shared/orgUnit";




export const  LOAD_ORG_UNITS =  '[OrgUnit] LOAD ORG UNITS';
export const  ORG_UNITS_LOADED =  '[OrgUnit] ORG UNITS LOADED';
/*export const  GET_ORG_UNITS_TREE =  '[OrgUnit] GET ORG UNITS TREE';*/



export class OrgUnitsLoaded implements  Action {

  readonly type =ORG_UNITS_LOADED;

  constructor(public payload:orgUnit[]) {

  }

}

export class LoadOrgUnits implements  Action {

  readonly type =LOAD_ORG_UNITS;

  constructor() {

  }

}
/*export class GetOrgUnitsTreeAction implements  Action {

  readonly type =GET_ORG_UNITS_TREE;

  constructor() {

  }

}*/

export type Actions
  = LoadOrgUnits|OrgUnitsLoaded ;


