import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeAnimations } from 'shared/animations/route-animations';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: routeAnimations,
})
export class App {
  protected title = 'angular-workspace';
  alert(msg: string) {
    window.alert(msg);
  }
}
