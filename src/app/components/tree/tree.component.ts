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

  nodes:orgUnitsTree[]=[] ;
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  constructor(private store: Store<AppState>) {
    store.select(getOrgUnitsList  ).do(d=>{
      if(d.length>0) {
        let orgUnitsTree: orgUnitsTree[]=d.map(this.orgUnitToTree);

        orgUnitsTree.splice( 0,0,{
          id: 1,
          parentId:null,
          name: 'עמיתים',
          selected: true,
          isExpanded: true,
          icon: 'account_balance',
          children:undefined
        });


        var map = {}, node, roots = [];
        for (var i = 0; i < orgUnitsTree.length; i += 1) {
          node = orgUnitsTree[i] ;
          node.children = [];
          map[node.id] = i; // use map to look-up the parents
          if (node.parentId !==null) {
            orgUnitsTree[map[node.parentId]].children.push(node);
          } else {
            roots.push(node);
          }
        }
       this.nodes=roots;
      }
      //this.nodes=d;


    }).subscribe();

    store.dispatch(new LoadOrgUnits());

  }

  ngOnInit() {
  }
    orgUnitToTree(ou:orgUnit)
{
  return  {
    id: ou.id,
    parentId:ou.parentId,
    name: ou.name,
    selected: false,
    isExpanded: true,
    icon: ou.icon,
    children:[]
  }

}

}
