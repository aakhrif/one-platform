import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiInputComponent } from '@shared/ui/input/input.component';

@Component({
  selector: 'app-register',
  template: `
    <form class="login-form">
      <ui-input
        label="Username"
        placeholder="Username"
        [(ngModel)]="username"
        name="username"
        [required]="true"
      ></ui-input>
      <ui-input
        label="Passwort"
        type="password"
        placeholder="Password"
        [(ngModel)]="password"
        name="password"
        [required]="true"
      ></ui-input>
      <ui-input
        label="E-Mail"
        type="email"
        placeholder="E-Mail"
        [(ngModel)]="email"
        name="email"
        [required]="true"
      ></ui-input>
      <button type="submit">Registrieren</button>
    </form>
  `,
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, UiInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
}
