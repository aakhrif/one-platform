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
      { path: '', component: StartPage, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: NxWelcome },
    ]
  },
  {
    path: 'docs',
    component: StartLayoutComponent,
    children: [
      { path: 'getting-started', loadComponent: () => import('pages/docs/docs-getting-started.page').then(m => m.DocsGettingStartedPage) },
      // weitere Doku-Seiten hier
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardLayoutComponent,
    children: dashboardRoutes,
  },
];
