import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {ITdDataTableColumn, TdDialogService} from "@covalent/core";
import {LazyLoadEvent} from "primeng/components/common/api";
import {gridColumn} from "../../models/client/gridColumn";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class GridComponent implements OnInit {

  @Input()
  data: any[];
  @Input()
  columns:gridColumn[];


  constructor( ) {
/*console.log("data length "+(this.data).length ||0)*/
  }

  ngOnInit() {



  }

  loadCarsLazy(event: LazyLoadEvent) {
    //for demo purposes keep loading the same dataset
    //in a real production application, this data should come from server by building the query with LazyLoadEvent options


  }
}
