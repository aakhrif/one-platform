import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeAnimations } from 'features/shared/animations/route-animations';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: routeAnimations,
})
export class App {
  protected title = 'angular-workspace';
}
