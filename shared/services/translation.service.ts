import { Injectable } from '@angular/core';
import { signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type TranslationDict = { [key: string]: string | TranslationDict };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  lang = signal<string>('de');
  private translations: TranslationDict = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('de');
  }

  setLanguage(lang: string): void {
    this.lang.set(lang);
    this.loadTranslations(lang);
  }

  getLanguage(): Signal<string> {
    return this.lang;
  }

  private loadTranslations(lang: string) {
    // Korrigierter Pfad: one-platform/src/assets/i18n
    const url = `/assets/i18n/${lang}.json`;
    return this.http.get<TranslationDict>(url).subscribe({
      next: (translations) => {
        this.translations = translations;
        this.lang.set(lang);
      },
      error: () => {
        this.translations = {};
        this.lang.set(lang);
      }
    });
  }

  translate(key: string): string {
    const value = this.translations[key];
    if (typeof value === 'string') {
      return value;
    }
    return key;
  }
}
