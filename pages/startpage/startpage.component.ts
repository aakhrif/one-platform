import { Component } from '@angular/core';
import { ProductSectionComponent } from '../../sections/product-section/product-section.component';

@Component({
  selector: 'page-start',
  template: `
    <section-product></section-product>
  `,
  standalone: true,
  imports: [ProductSectionComponent],
})
export class StartpageComponent {}
