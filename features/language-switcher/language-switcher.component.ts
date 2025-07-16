import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feature-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  lang: 'de' | 'en' = 'de';
  setLang(lang: 'de' | 'en') {
    this.lang = lang;
  }
}
