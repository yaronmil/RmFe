import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as orgUnitsActions from "../actions/orgUnitsActions"
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {OrgUnitsService} from "../../services/orgunits.service";

@Injectable()
export class OrgUnitsEffectService {

  constructor(private action$: Actions, private orgUnitsService: OrgUnitsService) {
  }


  @Effect()
orgUnitsEntryies: Observable<Action> = this.action$
  .ofType(orgUnitsActions.LOAD_ORG_UNITS)
  .switchMap(() => this.orgUnitsService.loadOrgUnits()
  ).map(d => new orgUnitsActions.OrgUnitsLoaded(d));

/*  @Effect()
  orgUnitsTree: Observable<Action> = this.action$
    .ofType(orgUnitsActions.GET_ORG_UNITS_TREE)
    .switchMap(() => this.orgUnitsService.loadOrgUnits()
    ).map(d => new orgUnitsActions.OrgUnitsLoaded(d));*/


}

