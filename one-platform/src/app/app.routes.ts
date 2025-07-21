import { Route } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { AuthGuard } from '@angular-workspace/auth/auth.guard';
import { LoginComponent } from '@angular-workspace/auth/login/login.component';
import { dashboardRoutes } from 'features/dashboard/dashboard.routes';
import { StartLayoutComponent } from '@shared/ui/layouts/start-layout.component';
import { DashboardLayoutComponent } from '@shared/ui/layouts/dashboard-layout.component';
import { StartpageComponent} from '@pages/startpage/startpage.component';
import { ContactPageComponent } from '@pages/contact/contactpage.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StartLayoutComponent,
    children: [
      {
        path: '',
        component: StartpageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      }
    ],
  },
  {
    path: 'member',
    component: StartLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('shared/ui/feature-start/feature-start-shell.component').then(m => m.FeatureStartShellComponent),
        pathMatch: 'full',
      },
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: NxWelcome },
    ]
  },
  {
    path: 'docs',
    component: StartLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('sections/docs/docs-getting-started.page').then(m => m.DocsGettingStartedPage) },
      // weitere Doku-Seiten hier
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardLayoutComponent,
    children: dashboardRoutes,
  }
];
