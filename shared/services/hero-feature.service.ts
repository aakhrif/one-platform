import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroFeatureService {
  private focusSearchSignal = signal(false);

  requestFocusSearch() {
    this.focusSearchSignal.set(true);
  }

  consumeFocusSearch() {
    if (this.focusSearchSignal()) {
      this.focusSearchSignal.set(false);
      return true;
    }
    return false;
  }

  get focusSearch() {
    return this.focusSearchSignal;
  }
}
