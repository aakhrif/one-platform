import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'ui-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, DecimalPipe],
})
export class ProductCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() features: string[] = [];
  @Input() price!: number;
  @Input() currency = 'EUR';
  @Input() icon = 'star_border';
  @Input() recommended = false;

  @Output() buy = new EventEmitter<void>();
}
