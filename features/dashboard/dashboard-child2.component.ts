import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'shared/ui/modal/modal.component';

@Component({
  selector: 'app-dashboard-child2',
  template: `
    <app-modal [onClose]="close">
      Child 2 Content
    </app-modal>
  `,
  styleUrls: ['./dashboard-child2.component.scss'],
  standalone: true,
  imports: [ModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardChild2Component {
  constructor(private router: Router) {}
  close = () => {
    this.router.navigate(['/dashboard']);
  };
}
