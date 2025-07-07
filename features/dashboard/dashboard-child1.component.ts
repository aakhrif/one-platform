import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-child1',
  template: `
    <div class="modal-content">
      <button class="close-btn" (click)="close()">&times;</button>
      Child 1 Content
    </div>
  `,
  styleUrls: ['./dashboard-child1.component.scss'],
  standalone: true,
})
export class DashboardChild1Component {
  constructor(private router: Router) {}
  close() {
    this.router.navigate(['/dashboard']);
  }
}
