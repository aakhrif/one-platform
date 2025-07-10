import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UiFooterComponent } from '../footer/footer.component';

@Component({
  selector: 'ui-start-layout',
  template: `
    <div class="start-layout">
      <ui-header></ui-header>
      <router-outlet></router-outlet>
      <ui-footer></ui-footer>
    </div>
  `,
  styleUrls: ['./start-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UiFooterComponent],
})
export class StartLayoutComponent {}
