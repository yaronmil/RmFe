
import {Routes} from "@angular/router";
import {TestComponent} from "./app/components/test/test.component";
import {DashboardTemplateComponent} from "./app/components/dashboard/dashboard.component";
export const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'dashboard', component: DashboardTemplateComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];


