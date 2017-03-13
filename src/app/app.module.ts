import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule,   } from '@angular/router';
import {AppRoutes} from "../app-routes";
import { TestComponent } from './components/test/test.component';
import 'hammerjs';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {DashboardTemplateComponent} from "./components/dashboard/dashboard.component";
import { NavigationFrameComponent } from './components/unitsNav/navigation-frame.component';
import {TreeModule} from "angular2-tree-component";
import { TreeComponent } from './components/tree/tree.component';
import { GridComponent } from './components/grid/grid.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { ProcessesGridComponent } from './components/gridmodel/processes-grid.component';
import { NavScrollComponent } from './components/unitsNav/nav-scroll/nav-scroll.component';
import {ProcessesViewComponent} from './components/unitsnav/processes-view/processes-view.component';
import { ProcessDialogComponent } from './components/unitsnav/processes-view/process-dialog/process-dialog.component';
import {ProcessesService} from "./services/process.service";
import { reducer } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import {RouterStoreModule} from "@ngrx/router-store";
import {Effect, EffectsModule} from "@ngrx/effects";
import {LoadProcessesEffectService} from "./store/effects/load-processes-effect.service";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';






@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardTemplateComponent,
    NavigationFrameComponent,

    TreeComponent,
    GridComponent,
    ProcessesGridComponent,
    NavScrollComponent,
    ProcessesViewComponent,
    ProcessDialogComponent,




  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentCoreModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    NgxChartsModule,
    TreeModule,
    DataTableModule,SharedModule,ReactiveFormsModule, StoreModule.provideStore(reducer),RouterStoreModule.connectRouter(),EffectsModule.run(LoadProcessesEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),




  ],
  providers: [ProcessesService],
  entryComponents: [
    ProcessDialogComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
