import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';

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
})
export class ProductSectionComponent implements OnInit {
  products: Product[] = [];

  async ngOnInit() {
    const resp = await fetch('assets/products.json');
    this.products = await resp.json();
  }
}
