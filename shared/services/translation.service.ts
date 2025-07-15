import { Injectable } from '@angular/core';
import { signal, Signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type TranslationDict = { [key: string]: string | TranslationDict };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  lang = signal<string>('de');
  private translations = signal<TranslationDict>({});
  translationsLoaded = signal<boolean>(false);

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
        this.translations.set(translations);
        this.lang.set(lang);
        this.translationsLoaded.set(true);
      },
      error: () => {
        this.translations.set({});
        this.lang.set(lang);
        this.translationsLoaded.set(false);
      }
    });
  }

  translate(key: string): Signal<string> {
    return computed(() => {
      const value = this.translations()[key];
      return typeof value === 'string' ? value : '';
    });
  }
}
