import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  protected title = 'angular-workspace';
  private translation = inject(TranslationService);
  private router = inject(Router);

  constructor() {
    this.translation.setLanguage('de');
  }

  alert(msg: string) {
    window.alert(msg);
  }
}
