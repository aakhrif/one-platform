import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map, startWith, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DeviceService implements OnDestroy {
  private mobileBreakpoint = 900;
  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth <= this.mobileBreakpoint);
  isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();
  private resizeSub = fromEvent(window, 'resize')
    .pipe(
      map(() => window.innerWidth <= this.mobileBreakpoint),
      distinctUntilChanged()
    )
    .subscribe(val => this.ngZone.run(() => this.isMobileSubject.next(val)));

  constructor(private ngZone: NgZone) {}

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }
}
