import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'ui-dashboard-layout',
  template: `
    <div class="dashboard-bg">
      <div class="dashboard-header">
        <h2>Dashboard (Protected)</h2>
        <nav>
          <a routerLink="child1" routerLinkActive="active">Open Modal 1</a>
          <a routerLink="child2" routerLinkActive="active">Open Modal 2</a>
          <a routerLink="contact" routerLinkActive="active">Contact</a>
        </nav>
        <button class="logout-btn" (click)="logout()" title="Logout">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./dashboard-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule],
})
export class DashboardLayoutComponent {
  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  }
}
