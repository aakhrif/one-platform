import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SearchComponent } from '../search/search.component';
import { DeviceService } from '../device.service';
import { TranslationService } from 'shared/services/translation.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ui-header',
  template: `
    <header class="ui-header">
      <span class="ui-header__logo">
        <a routerLink="/" style="text-decoration:none;color:inherit;cursor:pointer">🌐 0nePlatform</a>
      </span>
      <button class="ui-header__burger" (click)="toggleNav()" aria-label="Menü öffnen/schließen">
        <span></span><span></span><span></span>
      </button>
      <div class="ui-header__nav-wrap" [class.open]="navOpen">
        <nav class="ui-header__nav">
          <a routerLink="/products" routerLinkActive="active" (mouseenter)="showPanel('products')">{{ t('header.products') }}</a>
          <a routerLink="/docs" routerLinkActive="active" (mouseenter)="showPanel('docs')">{{ t('header.docs') }}</a>
          <a routerLink="/contact" routerLinkActive="active" (mouseenter)="showPanel('contact')">{{ t('header.contact') }}</a>
        </nav>
        <div class="mega-panel" *ngIf="panelType"
          (mouseenter)="panelType = panelType"
          (mouseleave)="panelType = ''">
          <div class="mega-panel__content">
            <ng-container *ngIf="panelType === 'products'">
              <div class="mega-panel__section">
                <a routerLink="/products/normen">{{ t('products.normen') }}</a>
                <a routerLink="/products/iso">{{ t('products.iso') }}</a>
                <a routerLink="/products/transformation">{{ t('products.transformation') }}</a>
                <a routerLink="/products/prozesse">{{ t('products.prozesse') }}</a>
              </div>
            </ng-container>
            <ng-container *ngIf="panelType === 'docs'">
              <div class="mega-panel__section">
                <a routerLink="/docs/getting-started" style="cursor:pointer" (click)="logDocsClick($event)">Getting Started</a>
                <a routerLink="/docs/api">API Reference</a>
              </div>
            </ng-container>
            <ng-container *ngIf="panelType === 'contact'">
              <div class="mega-panel__section">
                <a routerLink="/contact/form">Contact Form</a>
                <a routerLink="/contact/support">Support</a>
              </div>
            </ng-container>
          </div>
          <feature-language-switcher class="mega-panel__lang-switcher" *ngIf="isMobile"></feature-language-switcher>
        </div>
      </div>
      <ui-search class="ui-header__search"></ui-search>
      <feature-language-switcher class="ui-header__lang-switcher"></feature-language-switcher>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf, LanguageSwitcherComponent, SearchComponent, RouterModule],
})
export class HeaderComponent implements OnDestroy {
  panelType: 'products' | 'docs' | 'contact' | '' = '';
  navOpen = false;
  isMobile = false;
  private destroy$ = new Subject<void>();
  private translation = inject(TranslationService);

  constructor(private device: DeviceService) {
    this.device.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => this.isMobile = val);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  showPanel(type: 'products' | 'docs' | 'contact') {
    this.panelType = type;
  }

  t(key: string) {
    return this.translation.translate(key);
  }

  logDocsClick(event: Event) {
    console.log('Getting Started link clicked', event);
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
