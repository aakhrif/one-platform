import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-content">
      <button *ngIf="showClose" class="close-btn" (click)="onClose?.()">&times;</button>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() showClose = true;
  @Input() onClose?: () => void;
}
