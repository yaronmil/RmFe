import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {AppState, getOrgUnitsList, getOrgUnitsTree} from "../../store/reducers/index";
import {Store} from "@ngrx/store";
import {orgUnit} from "../../models/shared/orgUnit";
import {LoadOrgUnits} from "../../store/actions/orgUnitsActions";
import {orgUnitsTree} from "../../models/client/orgUnitsTree";
import {Observable} from "rxjs";
import {TreeComponent} from "angular2-tree-component";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent1 implements OnInit {

  nodes =[];

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  constructor(private store: Store<AppState>) {

    store.select(getOrgUnitsTree).do(d=>this.nodes=d).subscribe();
    store.dispatch(new LoadOrgUnits());

  }

  ngOnInit() {
  }



}
