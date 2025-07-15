import { Component, inject, computed, OnDestroy, HostListener } from '@angular/core';
import { TopBannerService } from 'shared/services/top-banner.service';
import { NgIf, NgClass } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SearchComponent } from '../search/search.component';
import { TranslationService } from 'shared/services/translation.service';
import { Subject } from 'rxjs';
import { RouterModule } from '@angular/router';
import type { PanelType } from '../../types/interfaces/index';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, LanguageSwitcherComponent, SearchComponent, RouterModule],
})
export class HeaderComponent implements OnDestroy {
  panelType: PanelType = '';
  navOpen = false;
  isMobile = false;
  private destroy$ = new Subject<void>();
  private translation = inject(TranslationService);
  private topBanner = inject(TopBannerService);
  showBanner = this.topBanner.show;


  // Computed property für dynamische CSS-Klasse
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

  t$ = (key: string) => () => this.translation.translate(key);

  logDocsClick(event: Event) {
    // intentionally left blank
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
