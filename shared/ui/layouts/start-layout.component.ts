import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UiFooterComponent } from '../footer/footer.component';
import { TopBannerComponent } from 'shared/ui/top-banner/top-banner.component';

@Component({
  selector: 'ui-start-layout',
  template: `
    <div class="start-layout">
      <ui-top-banner></ui-top-banner>
      <ui-header></ui-header>
      <router-outlet></router-outlet>
      <ui-footer></ui-footer>
    </div>
  `,
  styleUrls: ['./start-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UiFooterComponent, TopBannerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartLayoutComponent {}
