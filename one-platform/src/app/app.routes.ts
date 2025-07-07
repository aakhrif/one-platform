import { Route } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { DashboardComponent } from '@angular-workspace/dashboard/dashboard.component';
import { AuthGuard } from '@angular-workspace/auth/auth.guard';
import { LoginComponent } from '@angular-workspace/auth/login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    component: NxWelcome,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];
