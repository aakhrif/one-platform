import { Route } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { AuthGuard } from '@angular-workspace/auth/auth.guard';
import { LoginComponent } from '@angular-workspace/auth/login/login.component';
import { dashboardRoutes } from 'features/dashboard/dashboard.routes';
import { StartLayoutComponent } from 'shared/ui/layouts/start-layout.component';
import { DashboardLayoutComponent } from 'shared/ui/layouts/dashboard-layout.component';
import { StartPage } from 'pages/start/start.page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StartLayoutComponent,
    children: [
      { path: '', component: StartPage },
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: NxWelcome },
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardLayoutComponent,
    children: dashboardRoutes,
  },
];
