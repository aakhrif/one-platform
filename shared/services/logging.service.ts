import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  log(message: string, ...optionalParams: unknown[]) {
    console.log('[LOG]', message, ...optionalParams);
  }

  warn(message: string, ...optionalParams: unknown[]) {
    console.warn('[WARN]', message, ...optionalParams);
  }

  error(message: string, ...optionalParams: unknown[]) {
    console.error('[ERROR]', message, ...optionalParams);
  }

  info(message: string, ...optionalParams: unknown[]) {
    console.info('[INFO]', message, ...optionalParams);
  }
}
