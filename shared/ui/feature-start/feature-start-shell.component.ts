import { Component, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { FeatureStartMobileComponent } from '../feature-start/feature-start-mobile.component';
import { FeatureStartComponent } from './feature-start.component';

@Component({
  selector: 'feature-start-shell',
  standalone: true,
  imports: [FeatureStartMobileComponent, FeatureStartComponent],
  template: `
    @if (device.isMobile()) {
      <feature-start-mobile></feature-start-mobile>
    } @else {
      <feature-start></feature-start>
    }
  `
})
export class FeatureStartShellComponent {
  device = inject(DeviceService);
}
