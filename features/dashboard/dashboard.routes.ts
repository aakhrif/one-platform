import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from '@shared/ui/layouts/dashboard-layout.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'child1',
        loadComponent: () => import('./dashboard-child1.component').then(m => m.DashboardChild1Component),
      },
      {
        path: 'child2',
        loadComponent: () => import('./dashboard-child2.component').then(m => m.DashboardChild2Component),
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact.component').then(m => m.ContactComponent),
      },
    ],
  },
];
