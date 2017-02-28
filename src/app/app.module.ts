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


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentCoreModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
