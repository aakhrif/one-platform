import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
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
