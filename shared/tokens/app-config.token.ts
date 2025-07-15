import { InjectionToken } from '@angular/core';

export interface AppConfig {
  showBanner: boolean;
  // weitere zentrale Flags und Werte
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
