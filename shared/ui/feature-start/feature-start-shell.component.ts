import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { DeviceService } from '../../services/device.service';
import { FeatureStartMobileComponent } from './feature-start-mobile.component';
import { FeatureStartComponent } from './feature-start.component';

@Component({
  selector: 'feature-start-shell',
  standalone: true,
  imports: [NgIf, AsyncPipe, FeatureStartMobileComponent, FeatureStartComponent],
  template: `
    <ng-container *ngIf="device.isMobile$ | async; else desktop">
      <feature-start-mobile></feature-start-mobile>
    </ng-container>
    <ng-template #desktop>
      <feature-start></feature-start>
    </ng-template>
  `
})
export class FeatureStartShellComponent {
  device = inject(DeviceService);
}
