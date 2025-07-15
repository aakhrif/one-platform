import { Component, inject } from '@angular/core';
import { ModalComponent } from 'shared/ui/modal/modal.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@shared/services/translation.service';

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="ui-footer">
      <div class="ui-footer__content">
        <span class="ui-footer__brand">© 2025 0nePlatform</span>
        <span class="ui-footer__links">
          <a href="#" class="ui-footer__link" (click)="openImpressum($event)">{{ t$('footer.impressum') }}</a>
          <a href="#" class="ui-footer__link" (click)="openDatenschutz($event)">{{ t$('footer.datenschutz') }}</a>
        </span>
      </div>
      <app-modal *ngIf="showModal" [showClose]="true" [onClose]="closeModal">
        <div class="footer-modal-content">
          <ng-container *ngIf="modalType === 'impressum'">
            <h2>{{ t$('footer.impressum') }}</h2>
            <p>{{ t$('footer.impressumText') }}</p>
          </ng-container>
          <ng-container *ngIf="modalType === 'datenschutz'">
            <h2>{{ t$('footer.datenschutz') }}</h2>
            <p>{{ t$('footer.datenschutzText') }}</p>
          </ng-container>
        </div>
      </app-modal>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ModalComponent, CommonModule],
})
export class UiFooterComponent {
  showModal = false;
  modalType: 'impressum' | 'datenschutz' | null = null;
  private translationService =inject(TranslationService);

  t$ = (key: string) => this.translationService.translate(key);

  openImpressum(event: Event) {
    event.preventDefault();
    this.modalType = 'impressum';
    this.showModal = true;
  }
  openDatenschutz(event: Event) {
    event.preventDefault();
    this.modalType = 'datenschutz';
    this.showModal = true;
  }
  closeModal = () => {
    this.showModal = false;
    this.modalType = null;
  };
}
