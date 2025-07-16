import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="billing">
      <h2>Rechnungsübersicht</h2>
      <p>Hier könnten Rechnungen, Zahlungen oder Abos angezeigt werden.</p>
      <button (click)="onPay()">Beispiel-Zahlung auslösen</button>
      <div *ngIf="paid" class="success">Zahlung erfolgreich!</div>
    </section>
  `,
  styles: [`
    .billing { max-width: 400px; margin: 2rem auto; padding: 1rem; border: 1px solid #eee; border-radius: 8px; }
    .success { color: green; margin-top: 1rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingComponent {
  paid = false;

  onPay() {
    this.paid = true;
  }
}
