import { Component, inject, computed } from '@angular/core';
import { TopBannerService } from 'shared/services/top-banner.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from 'shared/services/translation.service';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBannerComponent {
  private topBanner = inject(TopBannerService);
  private translation = inject(TranslationService);

  t$ = (key: string) => this.translation.translate(key);

  show = computed(() => {
    const visible = this.topBanner.show();
    const loaded = this.translation.translationsLoaded();
    return visible && loaded;
  });
}
