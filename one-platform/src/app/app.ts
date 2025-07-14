import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeAnimations } from 'shared/animations/route-animations';
import { TranslationService } from 'shared/services/translation.service';
import { DeviceService } from 'shared/services/device.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: routeAnimations,
})
export class App {

  title = "OnePlatform";

  private device = inject(DeviceService);

  constructor() {
    inject(TranslationService);
    this.device.setDeviceType(window.innerWidth);
  }
}
