import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-child2',
  template: `
    <div class="modal-content">
      <button class="close-btn" (click)="close()">&times;</button>
      Child 2 Content
    </div>
  `,
  styleUrls: ['./dashboard-child2.component.scss'],
  standalone: true,
})
export class DashboardChild2Component {
  constructor(private router: Router) {}
  close() {
    this.router.navigate(['/dashboard']);
  }
}
