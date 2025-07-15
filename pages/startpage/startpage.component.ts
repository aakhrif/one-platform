import { Component } from '@angular/core';
import { ProductSectionComponent } from '../../sections/product-section/product-section.component';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';


@Component({
  selector: 'page-start',
  template: `
    <section-hero></section-hero>
    <section-product></section-product>
  `,
  standalone: true,
  imports: [ProductSectionComponent, HeroSectionComponent],
})
export class StartpageComponent {}
