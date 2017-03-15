/**
 * Created by Yaron on 3/8/2017.
 */

import * as  Actions      from "../actions/usersactions"
import {Action} from '@ngrx/store';
import {user} from "../../models/shared/user";


export interface State {
  usersList: user[]
}
const initialState: State = {
  usersList: [],

}

export function reducer(state = initialState, action: Actions.Actions): State {

  switch (action.type) {
    case Actions.LOAD_USERS:
      return state;
    case Actions.USERS_LOADED: {
      const usersList: user[] = (action as Action).payload;
      var ret = Object.assign({}, state, {usersList})
      return ret;

    }

    default :
      return state;
  }
}
export const getorgUsersList = (state: State) => state.usersList;

