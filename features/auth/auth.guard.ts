import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    // Check for JWT token in localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }
    // Optionally: decode and check expiry
    try {
      const payload = JSON.parse(atob(token));
      if (payload.exp && payload.exp < Date.now()) {
        localStorage.removeItem('jwt');
        this.router.navigate(['/login']);
        return of(false);
      }
    } catch {
      localStorage.removeItem('jwt');
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}
