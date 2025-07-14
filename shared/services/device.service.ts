import { Injectable, NgZone, OnDestroy, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService implements OnDestroy {
  private mobileBreakpoint = 900;
  isMobile = signal<boolean>(window.innerWidth <= this.mobileBreakpoint);
  private resizeSub = fromEvent(window, 'resize')
    .subscribe(() => {
      this.ngZone.run(() => {
        const isMobile = window.innerWidth <= this.mobileBreakpoint;
        this.isMobile.set(isMobile);
      });
    });

  constructor(private ngZone: NgZone) {}

  setDeviceType(windowWidth: number) {
    const isMobile = windowWidth <= this.mobileBreakpoint;
    this.isMobile.set(isMobile);
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }
}
