import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule,   } from '@angular/router';
import {AppRoutes} from "../app-routes";
import { TestComponent } from './components/test/test.component';
import 'hammerjs';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {DashboardTemplateComponent} from "./components/dashboard/dashboard.component";
import { NavigationFrameComponent } from './components/navigation-frame/navigation-frame.component';
import {DashboardProductComponent} from "./components/dashboard-product/dashboard-product.component";
import {TreeModule} from "angular2-tree-component";
import { TreeComponent } from './components/tree/tree.component';
import { GridComponent } from './components/grid/grid.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardTemplateComponent,
    NavigationFrameComponent,

    DashboardProductComponent,
    TreeComponent,
    GridComponent,


  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentCoreModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    NgxChartsModule,
    TreeModule,
    DataTableModule,SharedModule,



  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
