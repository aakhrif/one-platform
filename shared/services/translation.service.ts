import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type TranslationDict = { [key: string]: string | TranslationDict };

function loadTranslations(lang: string): TranslationDict {
  // @ts-expect-error dynamic require for translation JSON files
  try { return require(`../../assets/i18n/${lang}.json`); } catch { return {}; }
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang$ = new BehaviorSubject<string>('de');
  private translations: TranslationDict = loadTranslations('de');

  setLanguage(lang: string) {
    this.lang$.next(lang);
    this.translations = loadTranslations(lang);
  }

  getLanguage() {
    return this.lang$.asObservable();
  }

  translate(key: string): string {
    // Support nested keys (e.g. start.headline)
    let result: string | TranslationDict = this.translations;
    for (const part of key.split('.')) {
      if (typeof result === 'object' && result !== null && part in result) {
        result = result[part];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  }
}
