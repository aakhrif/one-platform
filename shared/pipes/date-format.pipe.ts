import { Pipe, PipeTransform } from '@angular/core';

/**
 * DateFormatPipe: Formatiert ein Datum je nach Sprache (de-DE oder en-US)
 * Usage: {{ dateValue | dateFormat:lang }}
 */
@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string | number, lang = 'de'): string {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    const locale = lang.startsWith('en') ? 'en-US' : 'de-DE';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
}
