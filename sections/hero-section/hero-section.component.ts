import { Component, inject } from '@angular/core';
import { TranslationService } from '@shared/services/translation.service';
import { HeroFeatureService } from '../../shared/services/hero-feature.service';

@Component({
  selector: 'section-hero',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
})
export class HeroSectionComponent {
  private translationService = inject(TranslationService);

  t$ = (key: string) => this.translationService.translate(key);

  private heroFeatureService = inject(HeroFeatureService);

  focusSearchInput() {
    this.heroFeatureService.requestFocusSearch();
  }
}
