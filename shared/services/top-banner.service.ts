import { Injectable, signal, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../tokens/app-config.token';

@Injectable({ providedIn: 'root' })
export class TopBannerService {
  show;
  text = signal<string>('Hinweis: Diese Website ist ein reines Demoprojekt zur Präsentation moderner Software-Engineering-Praktiken und -Patterns, insbesondere mit Angular. Alle dargestellten Produkte, Services und Daten sind fiktiv und dienen ausschließlich Demonstrationszwecken.');

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    this.show = signal<boolean>(this.config.showBanner);
  }

  open(text?: string) {
    if (text) this.text.set(text);
    this.show.set(true);
  }

  close() {
    this.show.set(false);
  }
}
