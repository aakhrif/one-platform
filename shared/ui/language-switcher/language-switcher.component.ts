import { Component, inject } from '@angular/core';
import { TranslationService } from 'shared/services/translation.service';

@Component({
  selector: 'feature-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  standalone: true,
})
export class LanguageSwitcherComponent {
  private translation = inject(TranslationService);
  lang: 'de' | 'en' = 'de';

  setLang(lang: 'de' | 'en'): void {
    this.lang = lang;
    this.translation.setLanguage(lang);
  }
}
