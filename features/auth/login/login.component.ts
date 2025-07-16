import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@angular-workspace/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { UiInputComponent } from '@shared/ui/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RegisterComponent, UiInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  showRegister = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: (user) => {
        // Simulate JWT token
        const token = btoa(
          JSON.stringify({ username: user.username, exp: Date.now() + 1000 * 60 * 60 })
        );
        localStorage.setItem('jwt', token);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Login fehlgeschlagen';
      },
    });
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
  }
}
