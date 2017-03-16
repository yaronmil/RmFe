/**
 * Created by Yaron on 3/8/2017.
 */

import * as  Actions      from "../actions/orgUnitsActions"
import {Action} from '@ngrx/store';
import {orgUnit} from "../../models/shared/orgUnit";
import {orgUnitsTree} from "../../models/client/orgUnitsTree";
import {getOrgUnitsList} from "./index";


export interface State {
  orgUnitsList: orgUnit[];
  orgUnitsTree: orgUnitsTree[]
}
const initialState: State = {
  orgUnitsList: [],
  orgUnitsTree: []
}
function orgUnitToTree(ou: orgUnit) {
  return {
    id: ou.id,
    parentId: ou.parentId,
    name: ou.name,
    selected: false,
    isExpanded: true,
    icon: ou.icon,
    children: []
  }

}
export function reducer(state = initialState, action: Actions.Actions): State {

  switch (action.type) {
    case Actions.LOAD_ORG_UNITS:
      return state;
    case Actions.ORG_UNITS_LOADED: {
      const orgUnitsList: orgUnit[] = (action as Action).payload;
      var ret = Object.assign({}, state, {orgUnitsList})
      return ret;
    }
    default :
      return state;
  }
}
export const getorgUnitsList = (state: State) => state.orgUnitsList;
export const getorgUnitsTree = (state: State) => {
  let orgUnitsTree: orgUnitsTree[] = state.orgUnitsList.map(orgUnitToTree);



  var map = {}, node, roots = [];
  for (var i = 0; i < orgUnitsTree.length; i += 1) {
    node = orgUnitsTree[i];
    node.children = [];
    map[node.id] = i; // use map to look-up the parents
    if (node.parentId !== null) {
      orgUnitsTree[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots
};
