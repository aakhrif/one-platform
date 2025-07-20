
import { Component, inject, computed } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { TopBannerService } from '../../services/top-banner.service';
import { SearchComponent } from '../../../features/search/search.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-header-mobile',
  standalone: true,
  imports: [SearchComponent, NgClass],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  openMenu = false;
  device = inject(DeviceService);
  private topBanner = inject(TopBannerService);
  showBanner = this.topBanner.show;
  headerClass = computed(() => this.showBanner() ? 'with-banner' : '');
}
