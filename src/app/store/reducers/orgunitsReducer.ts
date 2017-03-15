/**
 * Created by Yaron on 3/8/2017.
 */

import * as  Actions      from "../actions/orgUnitsActions"
import {Action} from '@ngrx/store';
import {orgUnit} from "../../models/shared/orgUnit";
import {orgUnitsTree} from "../../models/client/orgUnitsTree";


export interface State {
  orgUnitsList: orgUnit[];
  orgUnitsTree:orgUnitsTree[]
}
const initialState: State = {
  orgUnitsList: [],
  orgUnitsTree:[]
}

export function reducer(state = initialState, action: Actions.Actions): State {

  switch (action.type) {
    case Actions.LOAD_ORG_UNITS:
      return state;
    case Actions.ORG_UNITS_LOADED: {
      const orgUnitsList:orgUnit[] = (action as Action).payload;



     /* orgUnitsTree.push( {
        id: "1",
        parentId:null,
        name: 'עמיתים',
        selected: true,
        isExpanded: true,
        icon: 'account_balance',
        children:undefined

      });*/




      var ret=Object.assign({}, state, {orgUnitsList} )
      return ret;

    }
    /*case Actions.GET_ORG_UNITS_TREE:

      return state;*/

    default :
      return state;
  }
}
export const getorgUnitsList = (state: State) => state.orgUnitsList;
export const getorgUnitsTree = (state: State) => state.orgUnitsTree;
