// This file has been moved to features/dashboard/dashboard.component.ts as part of DDD/feature-sliced refactor.

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<h2>Dashboard (Protected)</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
