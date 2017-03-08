import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormControl, FormGroup} from "@angular/forms";
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";
import {AppState} from "../../../../store/reducers/index";
import {Store} from "@ngrx/store";
import {CreateAction} from "../../../../store/actions/processesActions";

@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.css']
})
export class ProcessDialogComponent {
  statusCtrl: FormControl;
  filteredStates: any;
  processForm: any;

  constructor(
              public dialogRef: MdDialogRef<ProcessDialogComponent>,
              private store:Store<AppState>,
              public http: Http) {



    this.statusCtrl = new FormControl();
    this.filteredStates = this.statusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

    this.processForm = new FormGroup({
      status: this.statusCtrl,
      name: new FormControl(),
      desc: new FormControl(),
      resp: new FormControl(),
      unit: new FormControl(),
      color: new FormControl()

    });
  }


  states = [
    'טיוטה',
    'ממתין לאישור',
    'מאושר'
  ];


  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  save() {
    this.store.dispatch(new CreateAction(this.processForm.value))
  }

  private handleError(error: Response | any) {
    /* // In a real world app, we might use a remote logging infrastructure
     let errMsg: string;
     if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
     errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Promise.reject(errMsg);*/
  }

}
