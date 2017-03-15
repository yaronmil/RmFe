import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as usersActions from "../actions/usersactions"
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {UsersService} from "../../services/users.service";

@Injectable()
export class UsersEffectService {


  constructor(private action$: Actions, private usersService: UsersService) {
  }


  @Effect()
  usersEntities: Observable<Action> = this.action$
    .ofType(usersActions.LOAD_USERS)
    .switchMap(() => this.usersService.loadUsers()
    ).map(d => new usersActions.UsersLoadedAction(d));

  /*  @Effect()
   orgUnitsTree: Observable<Action> = this.action$
   .ofType(orgUnitsActions.GET_ORG_UNITS_TREE)
   .switchMap(() => this.orgUnitsService.loadOrgUnits()
   ).map(d => new orgUnitsActions.OrgUnitsLoaded(d));*/


}

