import { Component } from '@angular/core';
import { LoginComponent } from '@features/auth/login/login.component';
import { ChatAssistantComponent } from '@features/chat-assistant/chat-assistant.component';

@Component({
  selector: 'feature-start',
  template: `
    <div class="feature-start">
      <div class="feature-start__left">
        <app-login></app-login>
      </div>
      <div class="feature-start__right">
        <h1>Willkommen zur Plattform</h1>
        <p>Erleben Sie modernes UI/UX, modulare Architektur und eine intuitive Benutzeroberfläche.</p>
        <p>Diese Plattform demonstriert DDD, Feature-Slices und wiederverwendbare Komponenten.</p>
        <p>Starten Sie mit Ihrem Login und entdecken Sie das Dashboard!</p>
      </div>
      <feature-chat-assistant></feature-chat-assistant>
    </div>
  `,
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [LoginComponent, ChatAssistantComponent],
})
export class StartPage {}
