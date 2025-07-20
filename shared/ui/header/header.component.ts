import { Component, inject, computed, OnDestroy, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { DeviceService } from '../../services/device.service';
import { HeaderMobileComponent } from './header-mobile.component';
import { TopBannerService } from 'shared/services/top-banner.service';
import { NgIf, NgClass } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SearchComponent } from '../../../features/search/search.component';
import { HeroFeatureService } from '../../../shared/services/hero-feature.service';
import { Subject } from 'rxjs';
import { RouterModule } from '@angular/router';
import type { PanelType } from '../../types/interfaces/index';
import { TranslationService } from '@shared/services/translation.service';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, LanguageSwitcherComponent, SearchComponent, RouterModule, HeaderMobileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy, AfterViewInit {
  @ViewChild('searchCmp') searchComponent?: SearchComponent;
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
  device = inject(DeviceService);
  panelType: PanelType = '';
  navOpen = false;
  get isMobile() {
    return this.device.isMobile();
  }
  private destroy$ = new Subject<void>();
  private topBanner = inject(TopBannerService);
  private translationService = inject(TranslationService);
  showBanner = this.topBanner.show;

  t$ = (key: string) => this.translationService.translate(key);
  headerClass = computed(() => this.showBanner() ? 'with-banner' : '');

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  showPanel(type: PanelType) {
    this.panelType = type;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mega-panel') && !target.closest('.ui-header__nav a')) {
      this.panelType = '';
    }
    if (!target.closest('.ui-header__nav') && !target.closest('.ui-header__burger')) {
      this.navOpen = false;
    }
  }
}
