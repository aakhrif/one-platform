import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  log(message: string, ...optionalParams: unknown[]) {
    // Logging entfernt
  }

  warn(message: string, ...optionalParams: unknown[]) {
    // Logging entfernt
  }

  error(message: string, ...optionalParams: unknown[]) {
    // Logging entfernt
  }

  info(message: string, ...optionalParams: unknown[]) {
    console.info('[INFO]', message, ...optionalParams);
  }
}
