import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="profile">
      <h2>Profil</h2>
      <p>Name: Max Mustermann</p>
      <p>E-Mail: max@example.com</p>
      <button (click)="onEdit()">Profil bearbeiten</button>
      <div *ngIf="edited" class="success">Profil gespeichert!</div>
    </section>
  `,
  styles: [`
    .profile { max-width: 400px; margin: 2rem auto; padding: 1rem; border: 1px solid #eee; border-radius: 8px; }
    .success { color: green; margin-top: 1rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  edited = false;

  onEdit() {
    this.edited = true;
  }
}
