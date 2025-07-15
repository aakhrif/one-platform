import { Component, inject, computed } from '@angular/core';
import { TopBannerService } from 'shared/services/top-banner.service';

@Component({
  selector: 'ui-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
  standalone: true,
})
export class TopBannerComponent {
  private topBanner = inject(TopBannerService);
  text = computed(() => this.topBanner.text());
}
