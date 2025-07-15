import { Component, inject, computed } from '@angular/core';
import { TopBannerService } from 'shared/services/top-banner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TopBannerComponent {
  private topBanner = inject(TopBannerService);
  text = computed(() => this.topBanner.text());
  show = computed(() => this.topBanner.show());
}
