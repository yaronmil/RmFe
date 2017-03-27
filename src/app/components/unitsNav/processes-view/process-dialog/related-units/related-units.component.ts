import {Component, OnInit, Input, AfterViewChecked, OnChanges} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {orgUnit} from "../../../../../models/shared/orgUnit";
import * as appStore from '../../../../../store/reducers';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-related-units',
  templateUrl: './related-units.component.html',
  styles: []
})
export class RelatedUnitsComponent implements OnChanges {

  @Input('group')
  public unitForm: FormGroup

  public departmentCtrl: FormControl

  public filteredUnits: Observable<any>;

  filteredDepartments: any;

  unitCtrl: FormControl;


  constructor(private store: Store<appStore.AppState>) {


  }

  ngOnChanges() {
    this.departmentCtrl = this.unitForm.controls["department"] as FormControl;
    this.unitCtrl = this.unitForm.controls["unit"] as FormControl;


    this.filteredUnits = this.unitCtrl.valueChanges
      .startWith(null)
      .switchMap(name => this.filterdUnits(name));

    this.filteredDepartments = this.departmentCtrl.valueChanges
      .startWith(null)
      .switchMap(name => this.filterdDepartments(name));


    let selectedDepartment=null;
    if(this.unitCtrl.value)
    this.store.select(appStore.getOrgUnitsList).do(oul => {
        selectedDepartment = oul.filter(ou => ou.id == this.unitCtrl.value.parentId);
        if ( selectedDepartment.length==1  )
          console.log( selectedDepartment[0])
         this.departmentCtrl.setValue(selectedDepartment[0])
      }
    ).subscribe();

  }

  private getOrgUnitName(unit: orgUnit): string {

    return unit == null ? "" : unit.name;
  }

  private filterdDepartments(val: string) {

    var selector = this.store.select(appStore.getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == 1))
    return val ?
      selector.map(ou => ou.filter(ou => ou.name.startsWith(val))) :
      selector;
  }

  private onDepartmentSelect(dep) {
    this.filteredUnits.subscribe();
  }


  private filterdUnits(val: string) {
    if (this.departmentCtrl.value === null)
      return Observable.from([]);

    var parent = this.departmentCtrl.value.id;
    var selector = this.store.select(appStore.getOrgUnitsList).map(orgUnits => orgUnits.filter(ou => ou.parentId == parent));
    return val ?
      selector :
      selector.map(orgUnits => orgUnits.filter(ou => ou.name.startsWith(val)));
  }

}
