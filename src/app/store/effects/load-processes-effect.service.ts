import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as processesActions from "../actions/processesActions"
import {ProcessesService} from "../../services/process.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class LoadProcessesEffectService {

  constructor(private action$:Actions,private processService:ProcessesService) { }
@Effect()
  processesEntryies:Observable<Action>=this.action$
    .ofType(processesActions.LOAD_PROCESSES)
    .switchMap(()=>this.processService.loadProcesses()).
    map(processesList=>new processesActions.ProcessesLoaded(processesList));
}
