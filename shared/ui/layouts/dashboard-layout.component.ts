import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ui-dashboard-layout',
  template: `
    <div class="dashboard-bg" [class.modal-open]="modalOpen$ | async">
      <div class="dashboard-header">
        <h2>Dashboard (Protected)</h2>
        <nav>
          <a routerLink="child1" routerLinkActive="active">Open Modal 1</a>
          <a routerLink="child2" routerLinkActive="active">Open Modal 2</a>
        </nav>
        <button class="logout-btn" (click)="logout()" title="Logout">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
      <router-outlet (activate)="onChildActivate($event)" (deactivate)="onChildDeactivate()"></router-outlet>
    </div>
  `,
  styleUrls: ['./dashboard-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, AsyncPipe],
})
export class DashboardLayoutComponent {
  modalOpen$ = new BehaviorSubject(false);

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  }

  onChildActivate(child: unknown) {
    // Prüfe, ob das Child ein Modal anzeigt (Convention: Modal-Komponente)
    if (child && child.constructor && child.constructor.name.includes('DashboardChild')) {
      this.modalOpen$.next(true);
    }
  }

  onChildDeactivate() {
    this.modalOpen$.next(false);
  }
}
