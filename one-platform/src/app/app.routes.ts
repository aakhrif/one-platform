import { Route } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { DashboardComponent } from '@angular-workspace/dashboard/dashboard.component';
import { AuthGuard } from '@angular-workspace/auth/auth.guard';
import { LoginComponent } from '@angular-workspace/auth/login/login.component';
import { dashboardRoutes } from 'features/dashboard/dashboard.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    component: NxWelcome,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: dashboardRoutes[0].children,
    component: DashboardComponent,
  },
];
