
import {Routes} from "@angular/router";
import {TestComponent} from "./app/components/test/test.component";
import {DashboardTemplateComponent} from "./app/components/dashboard/dashboard.component";
import {NavigationFrameComponent} from "./app/components/navigation-frame/navigation-frame.component";
export const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'navframe', component: NavigationFrameComponent },
  { path: 'dashboard', component: DashboardTemplateComponent},
  { path: '',   redirectTo: '/navframe', pathMatch: 'full' },
];


