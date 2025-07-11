import { Component, inject } from '@angular/core';
import { LoginComponent } from '@features/auth/login/login.component';
import { ChatAssistantComponent } from '@features/chat-assistant/chat-assistant.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'feature-start',
  template: `
    <div class="feature-start">
      <div class="feature-start__left">
        <app-login></app-login>
      </div>
      <div class="feature-start__right">
        <h1>{{ t('start.headline') }}</h1>
        <p>{{ t('start.desc1') }}</p>
        <p>{{ t('start.desc2') }}</p>
        <p>{{ t('start.desc3') }}</p>
      </div>
      <feature-chat-assistant></feature-chat-assistant>
    </div>
  `,
  styleUrls: ['./feature-start.component.scss'],
  standalone: true,
  imports: [LoginComponent, ChatAssistantComponent],
})
export class FeatureStartComponent {
  private translation = inject(TranslationService);
  t(key: string) {
    return this.translation.translate(key);
  }
}
