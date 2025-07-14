import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeAnimations } from 'shared/animations/route-animations';
import { TranslationService } from 'shared/services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: routeAnimations,
})
export class App {

  title = "OnePlatform";
  private translation = inject(TranslationService);
  translationsLoaded: boolean = false;

  constructor() {
    this.translation.setLanguage('de');
    this.translation.getLanguage().subscribe(() => {
      this.translationsLoaded = true;
      // Debug: Zeige die geladenen Übersetzungen im Log an
      // Debug logs entfernt
    });
  }
}
