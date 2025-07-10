import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeAnimations } from 'shared/animations/route-animations';
import { TranslationService } from 'shared/services/translation.service';
import { UiFooterComponent } from 'shared/ui/footer/footer.component';

@Component({
  imports: [RouterModule, UiFooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: routeAnimations,
})
export class App {
  protected title = 'angular-workspace';
  private translation = inject(TranslationService);

  constructor() {
    this.translation.setLanguage('de');
  }

  alert(msg: string) {
    window.alert(msg);
  }
}
