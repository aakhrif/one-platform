import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-bg">
      <h2>Dashboard (Protected)</h2>
      <nav>
        <a routerLink="child1" routerLinkActive="active">Open Modal 1</a>
        <a routerLink="child2" routerLinkActive="active">Open Modal 2</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class DashboardComponent {}
