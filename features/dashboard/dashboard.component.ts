import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="dashboard-bg"><h2>Dashboard (Protected)</h2></div>`,
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent {}
