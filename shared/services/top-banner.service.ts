import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TopBannerService {
  show = signal<boolean>(true);
  text = signal<string>('Hinweis: Diese Website ist ein reines Demoprojekt zur Präsentation moderner Software-Engineering-Praktiken und -Patterns, insbesondere mit Angular. Alle dargestellten Produkte, Services und Daten sind fiktiv und dienen ausschließlich Demonstrationszwecken.');

  open(text?: string) {
    if (text) this.text.set(text);
    this.show.set(true);
  }

  close() {
    this.show.set(false);
  }
}
