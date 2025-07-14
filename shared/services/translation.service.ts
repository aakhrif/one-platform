import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

type TranslationDict = { [key: string]: string | TranslationDict };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang$ = new BehaviorSubject<string>('de');
  private translations: TranslationDict = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('de').subscribe();
  }

  setLanguage(lang: string) {
    this.lang$.next(lang);
    this.loadTranslations(lang).subscribe();
  }

  getLanguage() {
    return this.lang$.asObservable();
  }

  private loadTranslations(lang: string): Observable<TranslationDict> {
    // Korrigierter Pfad: one-platform/src/assets/i18n
    const url = `/assets/i18n/${lang}.json`;
    return this.http.get<TranslationDict>(url).pipe(
      tap(translations => {
        this.translations = translations;
        this.lang$.next(this.lang$.value);
      }),
      catchError(() => {
        this.translations = {};
        this.lang$.next(this.lang$.value);
        return of({});
      })
    );
  }

  translate(key: string): string {
    const value = this.translations[key];
    if (typeof value === 'string') {
      return value;
    }
    return key;
  }
}
