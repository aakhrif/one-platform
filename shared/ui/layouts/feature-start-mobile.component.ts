import { Component } from '@angular/core';
import { LoginComponent } from '../../../features/auth/login/login.component';

@Component({
  selector: 'feature-start-mobile',
  template: `
    <div class="feature-start-mobile">
      <h1>Willkommen zur Plattform</h1>
      <app-login></app-login>
      <div class="feature-start-mobile__info">
        <p>Erleben Sie modernes UI/UX, modulare Architektur und eine intuitive Benutzeroberfläche.</p>
        <p>Diese Plattform demonstriert DDD, Feature-Slices und wiederverwendbare Komponenten.</p>
        <p>Starten Sie mit Ihrem Login und entdecken Sie das Dashboard!</p>
      </div>
    </div>
  `,
  styleUrls: ['./feature-start-mobile.component.scss'],
  standalone: true,
  imports: [LoginComponent],
})
export class FeatureStartMobileComponent {}
