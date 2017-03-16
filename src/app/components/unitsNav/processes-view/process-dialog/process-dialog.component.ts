import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";
import {AppState, getUsersList, getOrgUnitsList} from "../../../../store/reducers/index";
import {Store} from "@ngrx/store";
import {ProcessManualyCreated, ProcessDialogClose} from "../../../../store/actions/processesactions";
import {LoadUsersAction} from "../../../../store/actions/usersactions";
import {user} from "../../../../models/shared/user";
import {userFullNamePipe} from "../../../../pipes/userFullNamePipe";
import {getorgUnitsList} from "../../../../store/reducers/orgunitsReducer";
import {orgUnit} from "../../../../models/shared/orgUnit";
import {Observable} from "rxjs";


@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.css'],
  providers: [userFullNamePipe]
})
export class ProcessDialogComponent {
  statusCtrl: FormControl;
  colorCtrl: FormControl;
  departmentCtrl: FormControl;
  unitCtrl: FormControl;

  filteredStates: any;
  filteredColors:any;
  filteredDepartments: any;
  filteredResp: any;

  filteredUnits:Observable<any>;

  processForm: any;
  states = [
    'טיוטה',
    'ממתין לאישור',
    'מאושר'
  ];
  colors = [
    'ירוק',
    'כתום',
    'אדום'
  ];


  constructor(private store: Store<AppState>, private usersFullNamePipe: userFullNamePipe) {

    /*if(this.store.select(getUsersList))*/
    store.dispatch(new LoadUsersAction())

    this.statusCtrl = new FormControl();
    this.colorCtrl = new FormControl();
    this.departmentCtrl = new FormControl();
    this.unitCtrl = new FormControl();


    this.filteredStates = this.statusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));


    this.filteredColors = this.colorCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterColors(name));

    this.filteredUnits = this.unitCtrl.valueChanges
      .startWith(null)
      .switchMap(name => this.filterdUnits(name));




    this.filteredDepartments = this.departmentCtrl.valueChanges
      .startWith(null)
      .switchMap(name => this.filterdDepartments(name));



    this.filteredResp = this.statusCtrl.valueChanges
      .startWith(null)
      .switchMap(name => this.filterResp(name));


    this.processForm = new FormGroup({
      status: this.statusCtrl,
      name: new FormControl(),
      desc: new FormControl(),
      resp: new FormControl(),
      unit: this.unitCtrl,
      color: this.colorCtrl,
      map: new FormControl(),
      department: this.departmentCtrl
    });
  }

  private onDepartmentSelect(dep) {
    console.log(dep);
    this.filteredUnits.subscribe();
  }

  private displayFn(user: user): string {

    var x = new userFullNamePipe();
    return x.transform(user);
  }

  private filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }
  private filterColors(val: string) {
    return val ? this.colors.filter((s) => new RegExp(val, 'gi').test(s)) : this.colors;
  }


  private filterdDepartments(val: string) {

    var selector = this.store.select(getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == 1))
    return val ?
      selector.map(ou => ou.filter(ou => ou.name.startsWith(val))) :
      selector;
  }

  private getOrgUnitName(unit: orgUnit): string {

    return unit == null ? "" : unit.name;
  }

  private filterdUnits(val: string) {
    console.log("val=", this.departmentCtrl.value === null);
    if (this.departmentCtrl.value === null)
      return Observable.from([]);

    var parent = this.departmentCtrl.value.id;
    console.log(parent);
    var selector = this.store.select(getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == parent));
    return val ?
      selector :
      selector.map(orgUnits => orgUnits.filter(ou => ou.name.startsWith(val)));
  }

  private filterResp(val: string) {
    return val ? this.store.select(getUsersList) : this.store.select(getUsersList);
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
