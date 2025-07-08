import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ui-dashboard-layout',
  template: `
    <div class="dashboard-layout">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./dashboard-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class DashboardLayoutComponent {}
