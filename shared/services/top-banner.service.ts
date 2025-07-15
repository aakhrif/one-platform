import { Injectable, signal, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../tokens/app-config.token';

@Injectable({ providedIn: 'root' })
export class TopBannerService {
  show;

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    this.show = signal<boolean>(this.config.showBanner);
  }

  open(text?: string) {
    // Banner-Text kommt jetzt immer aus i18n, daher keine set-Möglichkeit mehr
    this.show.set(true);
  }

  close() {
    this.show.set(false);
  }
}
