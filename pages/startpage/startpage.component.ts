import { Component, inject } from '@angular/core';
import { ProductSectionComponent } from '../../sections/product-section/product-section.component';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { SearchResultComponent } from '../../features/search/search-result.component';
import { JobModel } from '../../features/search/search.service';
import { SearchStateService } from '../../features/search/search-state.service';


@Component({
  selector: 'page-start',
  template: `
    <section-hero></section-hero>
    <div class="search-container">
      <ui-search-result
        (jobSelected)="onJobSelected($event)"
        (closed)="onPanelClosed()"
      ></ui-search-result>
    </div>
    <section-product></section-product>
  `,
  standalone: true,
  imports: [ProductSectionComponent, HeroSectionComponent, SearchResultComponent],
})
export class StartpageComponent {
  searchState = inject(SearchStateService);
  get results(): JobModel[] {
    return this.searchState.results();
  }

  onJobSelected(job: JobModel) {
    // Handle job selection
  }

  onPanelClosed() {
    this.searchState.clearResults();
  }
}
