import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ui-header',
  template: `
    <header class="ui-header">
      <span class="ui-header__logo">🌐 OnePlatform</span>
      <nav class="ui-header__nav">
        <a routerLink="/products" routerLinkActive="active" (mouseenter)="showPanel('products')">Products</a>
        <a routerLink="/docs" routerLinkActive="active" (mouseenter)="showPanel('docs')">Docs</a>
        <a routerLink="/contact" routerLinkActive="active" (mouseenter)="showPanel('contact')">Contact</a>
      </nav>
      <div class="mega-panel" *ngIf="panelType"
        (mouseenter)="panelType = panelType"
        (mouseleave)="panelType = ''">
        <button class="mega-panel__close" (click)="panelType = ''" aria-label="Panel schließen">×</button>
        <div class="mega-panel__content">
          <ng-container *ngIf="panelType === 'products'">
            <div class="mega-panel__section">
              <h4>Products</h4>
              <a routerLink="/products/ai">AI Products</a>
              <a routerLink="/products/stocks">Stocks</a>
            </div>
          </ng-container>
          <ng-container *ngIf="panelType === 'docs'">
            <div class="mega-panel__section">
              <h4>Docs</h4>
              <a routerLink="/docs/getting-started">Getting Started</a>
              <a routerLink="/docs/api">API Reference</a>
            </div>
          </ng-container>
          <ng-container *ngIf="panelType === 'contact'">
            <div class="mega-panel__section">
              <h4>Contact</h4>
              <a routerLink="/contact">Contact Form</a>
              <a routerLink="/contact/support">Support</a>
            </div>
          </ng-container>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class HeaderComponent {
  panelType: 'products' | 'docs' | 'contact' | '' = '';

  showPanel(type: 'products' | 'docs' | 'contact') {
    this.panelType = type;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mega-panel') && !target.closest('.ui-header__nav a')) {
      this.panelType = '';
    }
  }
}
