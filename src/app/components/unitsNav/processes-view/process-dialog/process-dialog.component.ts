import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";

import * as appStore from '../../../../store/reducers';
import {Store} from "@ngrx/store";
import {
  ProcessManualyCreated, ProcessDialogClose,
  EditedProcessSaved, ProcessEditSave
} from "../../../../store/actions/processesactions";
import {LoadUsersAction} from "../../../../store/actions/usersactions";
import {user} from "../../../../models/shared/user";
import {userFullNamePipe} from "../../../../pipes/userFullNamePipe";
import {orgUnit} from "../../../../models/shared/orgUnit";
import {Observable} from "rxjs";
import {process} from "../../../../models/shared/process";


@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.css'],
  providers: [userFullNamePipe]
})
export class ProcessDialogComponent {
  isEditMode: boolean = false;
  statusCtrl: FormControl;
  colorCtrl: FormControl;
  unitCtrl: FormControl;
  departmentCtrl: FormControl;

  filteredStates: any;
  filteredColors: any;
  filteredDepartments: any;
  filteredResp: any;

  filteredUnits: Observable<any>;

  processForm: FormGroup;
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


  constructor(private store: Store<appStore.AppState>, private formBuilder: FormBuilder) {


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


    this.createForm();

    store.select(appStore.getProcessToEdit).do(
      state => state ? this.setvalues(state) : null).subscribe();
    store.dispatch(new LoadUsersAction())
  }

  private createForm() {
      this.processForm = this.formBuilder.group({
      id: [],
      status: this.statusCtrl,
      name: [],
      desc: [],
      resp: [],
      color: this.colorCtrl,
      units: this.formBuilder.array([
        this.formBuilder.group({
          department:this.departmentCtrl,
          unit:this.unitCtrl
        }),
        this.formBuilder.group({
          department:this.departmentCtrl,
          unit:this.unitCtrl
        })
      ]),
      map: [],

    })

    /* this.processForm = new FormGroup({
     id:new FormControl(),
     status: this.statusCtrl,
     name: new FormControl(),
     desc: new FormControl(),
     resp: new FormControl(),
     /!*units: this.unitsCtrl,*!/
     color: this.colorCtrl,
     map: new FormControl(),
     department: this.departmentCtrl
     });*/
  }

  private units() {
    return
  }

  private setvalues(process: process) {
    this.createForm();
    this.isEditMode = true;
    this.processForm.patchValue(process);
  }

  public  save() {
    if (this.isEditMode)
      this.store.dispatch(new ProcessEditSave(this.processForm.value))
    else
      this.store.dispatch(new ProcessManualyCreated(this.processForm.value))
  }

  /*  public close() {
   console.log("closing dialo1g");
   this.store.dispatch(new ProcessDialogClose());

   }
   private closeDialog()
   {

   }*/


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

    var selector = this.store.select(appStore.getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == 1))
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
    var selector = this.store.select(appStore.getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == parent));
    return val ?
      selector :
      selector.map(orgUnits => orgUnits.filter(ou => ou.name.startsWith(val)));
  }

  close() {

    this.store.dispatch(new ProcessDialogClose());

  }

  private filterResp(val: string) {
    return val ? this.store.select(appStore.getUsersList) : this.store.select(appStore.getUsersList);
  }


}
