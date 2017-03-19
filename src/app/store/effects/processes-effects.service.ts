import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as processesActions from "../actions/processesactions"
import {ProcessesService} from "../../services/process.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {process} from "../../models/shared/process";

@Injectable()
export class ProcessesEffectService {

  constructor(private action$: Actions, private processService: ProcessesService) {
  }

  @Effect()
  processesEntryies: Observable<Action> = this.action$
    .ofType(processesActions.LOAD_PROCESSES)
    .switchMap(() => this.processService.loadProcesses()).map(processesList => new processesActions.ProcessesLoaded(processesList));


  @Effect()
  newProcess: Observable<Action> = this.action$
    .ofType(processesActions.CREATE_PROCESS)
    .switchMap(action => this.processService.createProcess(action.payload)).map(newProcess => new processesActions.ProcessCreated(newProcess));

  @Effect()
  addProcessAndCloseDialog: Observable<Action> = this.action$
    .ofType(processesActions.PROCESS_MANUALY_CREATED).map(action => action.payload).mergeMap((process: process) => {
      return [
        new processesActions.CreateAction(process),
        new processesActions.ProcessDialogClose()
      ]
    });

  @Effect()
  DeleteProcess: Observable<Action> = this.action$
    .ofType(processesActions.DELETE_PROCESS)
    .switchMap(action => this.processService.DeleteProcess(action.payload)).map(deleteResult => new processesActions.ProcessDeleted());

  @Effect()
  editProcess: Observable<Action> = this.action$
    .ofType(processesActions.PROCESS_EDIT_SAVE)
    .switchMap(action => this.processService.UpdateProcess(action.payload)).map(updatedProcess => new processesActions.EditedProcessSaved(updatedProcess));
}

