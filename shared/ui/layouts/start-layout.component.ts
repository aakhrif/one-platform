import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'ui-start-layout',
  template: `
    <div class="start-layout">
      <ui-header></ui-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./start-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
})
export class StartLayoutComponent {}
