import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { from, Observable } from 'rxjs';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  currency: string;
  icon: string;
  recommended: boolean;
}

@Component({
  selector: 'section-product',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSectionComponent implements OnInit {
  //products: Product[] = [];
  products$!: Observable<Product[]>;
  hoveredIndex: number | null = null;

  async ngOnInit() {
    // const resp = await fetch('assets/products.json');
    // this.products = await resp.json();
    this.products$ = from(fetch('assets/products.json').then(resp => resp.json()));
  }

  setHovered(idx: number|null) {
    this.hoveredIndex = idx;
  }
}
