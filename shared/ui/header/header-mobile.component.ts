import { Component, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'ui-header-mobile',
  standalone: true,
  template: `
    <header class="ui-header-mobile">
      <div class="ui-header-mobile__row">
        <span class="ui-header-mobile__logo">one<span class="logo-one">.</span>platform</span>
        <button class="ui-header-mobile__burger" (click)="openMenu = !openMenu" aria-label="Menü öffnen">
          <span></span><span></span><span></span>
        </button>
      </div>
      @if (openMenu) {
        <nav class="ui-header-mobile__nav">
          <!-- Hier Navigation, Suche, Language Switcher einbauen -->
          <ng-content></ng-content>
        </nav>
      }
    </header>
  `,
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  openMenu = false;
  device = inject(DeviceService);
}
