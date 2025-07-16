import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIcon(
      'check_circle',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_circle.svg')
    );
  }
  @Input() name!: string;
  @Input() description!: string;
  @Input() features: string[] = [];
  @Input() price!: number;
  @Input() currency = 'EUR';
  @Input() icon = 'star_border';
  @Input() recommended = false;

  @Input() hovered = false;
  @Output() buy = new EventEmitter<void>();
}
