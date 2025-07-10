import { Component, HostListener, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SearchComponent } from '../search/search.component';
import { DeviceService } from '../device.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ui-header',
  template: `
    <header class="ui-header">
      <span class="ui-header__logo">🌐 0nePlatform</span>
      <button class="ui-header__burger" (click)="toggleNav()" aria-label="Menü öffnen/schließen">
        <span></span><span></span><span></span>
      </button>
      <div class="ui-header__nav-wrap" [class.open]="navOpen">
        <nav class="ui-header__nav">
          <a routerLink="/products" routerLinkActive="active" (mouseenter)="showPanel('products')">Products</a>
          <a routerLink="/docs" routerLinkActive="active" (mouseenter)="showPanel('docs')">Docs</a>
          <a routerLink="/contact" routerLinkActive="active" (mouseenter)="showPanel('contact')">Contact</a>
        </nav>
        <div class="mega-panel" *ngIf="panelType"
          (mouseenter)="panelType = panelType"
          (mouseleave)="panelType = ''">
          <div class="mega-panel__content">
            <ng-container *ngIf="panelType === 'products'">
              <div class="mega-panel__section">
                <a routerLink="/products/ai">AI Products</a>
                <a routerLink="/products/stocks">Stocks</a>
              </div>
            </ng-container>
            <ng-container *ngIf="panelType === 'docs'">
              <div class="mega-panel__section">
                <a routerLink="/docs/getting-started">Getting Started</a>
                <a routerLink="/docs/api">API Reference</a>
              </div>
            </ng-container>
            <ng-container *ngIf="panelType === 'contact'">
              <div class="mega-panel__section">
                <a routerLink="/contact">Contact Form</a>
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
  imports: [NgIf, LanguageSwitcherComponent, SearchComponent],
})
export class HeaderComponent implements OnDestroy {
  panelType: 'products' | 'docs' | 'contact' | '' = '';
  navOpen = false;
  isMobile = false;
  private destroy$ = new Subject<void>();

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
