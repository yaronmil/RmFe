/**
 * Created by Yaron on 3/15/2017.
 */
import { Action } from '@ngrx/store';
import {user} from "../../models/shared/user";
export  const  LOAD_USERS =  '[users] LOAD LOAD USERS';
export  const USERS_LOADED =  '[users] USERS LOADED';

export class LoadUsersAction implements  Action {

  readonly type =LOAD_USERS;

  constructor() {

  }

}
export class UsersLoadedAction implements  Action {

  readonly type =USERS_LOADED;

  constructor(public payload:user[]) {

  }

}

export type Actions
  = LoadUsersAction|UsersLoadedAction ;
