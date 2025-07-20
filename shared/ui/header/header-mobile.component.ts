
import { Component, inject, computed, ViewChild, AfterViewInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { DeviceService } from '../../services/device.service';
import { TopBannerService } from '../../services/top-banner.service';
import { SearchComponent } from '../../../features/search/search.component';
import { HeroFeatureService } from '../../services/hero-feature.service';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ui-header-mobile',
  standalone: true,
  imports: [SearchComponent, NgClass, RouterModule],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements AfterViewInit {
  openMenu = false;
  device = inject(DeviceService);
  private topBanner = inject(TopBannerService);
  showBanner = this.topBanner.show;
  headerClass = computed(() => this.showBanner() ? 'with-banner' : '');

  @ViewChild(SearchComponent) searchComponent?: SearchComponent;
  private heroFeatureService = inject(HeroFeatureService);
  private focusSearch$ = toObservable(this.heroFeatureService.focusSearch);

  ngAfterViewInit() {
    this.focusSearch$.subscribe((focus: boolean) => {
      if (focus && this.searchComponent) {
        this.searchComponent.focusInput();
        this.heroFeatureService.consumeFocusSearch();
      }
    });
  }
}
