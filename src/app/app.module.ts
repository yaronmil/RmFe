import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TreeComponent1 } from './components/tree/tree.component';
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
import { ProcessesEffectService} from "./store/effects/processes-effects.service";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {OrgUnitsService} from "./services/orgunits.service";
import {OrgUnitsEffectService} from "./store/effects/orgunits-effects.service";
import {UsersService} from "./services/users.service";
import {UsersEffectService} from "./store/effects/users-effects.service";
import {userFullNamePipe} from "./pipes/userFullNamePipe";
import {orgUnitsPipe} from "./pipes/orgunits-pipe";
import { RelatedUnitsComponent } from './components/unitsNav/processes-view/process-dialog/related-units/related-units.component';
import { RisksViewComponent } from './components/unitsNav/risks-view/risks-view.component';







@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardTemplateComponent,
    NavigationFrameComponent,

    TreeComponent1,
    ProcessesGridComponent,
    NavScrollComponent,
    ProcessesViewComponent,
    ProcessDialogComponent,
    userFullNamePipe,
    orgUnitsPipe,
    RelatedUnitsComponent,
    RisksViewComponent
  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CovalentCoreModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    NgxChartsModule,
    TreeModule,
    DataTableModule,SharedModule,ReactiveFormsModule, StoreModule.provideStore(reducer),RouterStoreModule.connectRouter(),
    EffectsModule.run(ProcessesEffectService),
    EffectsModule.run(OrgUnitsEffectService),
    EffectsModule.run(UsersEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),




  ],
  providers: [ProcessesService,OrgUnitsService,UsersService],
  entryComponents: [
    ProcessDialogComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
