import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'shared/ui/modal/modal.component';

@Component({
  selector: 'app-dashboard-child1',
  template: `
    <app-modal [onClose]="close">
      Child 1 Content
    </app-modal>
  `,
  styleUrls: ['./dashboard-child1.component.scss'],
  standalone: true,
  imports: [ModalComponent],
})
export class DashboardChild1Component {
  constructor(private router: Router) {}
  close = () => {
    this.router.navigate(['/dashboard']);
  };
}
