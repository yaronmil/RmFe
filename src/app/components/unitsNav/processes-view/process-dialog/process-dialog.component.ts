import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";
import {AppState, getUsersList} from "../../../../store/reducers/index";
import {Store} from "@ngrx/store";
import {ProcessManualyCreated, ProcessDialogClose} from "../../../../store/actions/processesactions";
import {LoadUsersAction} from "../../../../store/actions/usersactions";
import {user} from "../../../../models/shared/user";
import {userFullNamePipe} from "../../../../pipes/userFullNamePipe";


@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.css'],
  providers: [userFullNamePipe]
})
export class ProcessDialogComponent {
  statusCtrl: FormControl;
  filteredStates: any;
  filteredResp:any;
  processForm: any;
  states = [
    'טיוטה',
    'ממתין לאישור',
    'מאושר'
  ];

  constructor(private store: Store<AppState>,private usersFullNamePipe:userFullNamePipe) {

    /*if(this.store.select(getUsersList))*/
    store.dispatch(new LoadUsersAction())

    this.statusCtrl = new FormControl();
    this.filteredStates = this.statusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

    this.filteredResp = this.statusCtrl.valueChanges
      .startWith(null)
      .switchMap(name=> this.filterResp(name));

    this.processForm = new FormGroup({
      status: this.statusCtrl,
      name: new FormControl(),
      desc: new FormControl(),
      resp: new FormControl(),
      unit: new FormControl(),
      color: new FormControl()

    });
  }


  private displayFn(user: user): string {

    var x=new userFullNamePipe();
    return   x.transform(user);
  }

  private filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  private filterResp(val: string) {
    return  val? this.store.select(getUsersList) :this.store.select(getUsersList);
  }

  public  save() {
    console.log("saving");
    this.store.dispatch(new ProcessManualyCreated(this.processForm.value))
  }

  public close() {
    console.log("closing dialog");
    this.store.dispatch(new ProcessDialogClose());
  }


}
