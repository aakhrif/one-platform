import { Component, inject, OnInit } from '@angular/core';
import { TranslationService } from '@shared/services/translation.service';
import { HeroFeatureService } from '../../shared/services/hero-feature.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'section-hero',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
})
export class HeroSectionComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private translationService = inject(TranslationService);
  private heroFeatureService = inject(HeroFeatureService);
  t$ = (key: string) => this.translationService.translate(key);

  ngOnInit() {
    this.title.setTitle('OnePlatform – Modern Angular Search Release');
    this.meta.updateTag({ name: 'description', content: 'Try our new search: Angular best practices, global state, UX-optimized results, and more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, SSR, Search, Software Engineering, RxJS, Signals, UI, Feature Slices, DDD, SPA, WebApp' });
    this.meta.updateTag({ property: 'og:title', content: 'OnePlatform – Modern Angular Search Release' });
    this.meta.updateTag({ property: 'og:description', content: 'Try our new search: Angular best practices, global state, UX-optimized results, and more.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    // ...weitere Tags nach Bedarf...
  }

  focusSearchInput() {
    this.heroFeatureService.requestFocusSearch();
  }
}
