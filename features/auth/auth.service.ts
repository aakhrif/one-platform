import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'assets/users.json'; // Adjust path if needed

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    // Debug logs entfernt
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => {
        // Debug logs entfernt
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
          throw new Error('Invalid credentials');
        }
        return user;
      }),
      catchError(err => throwError(() => err))
    );
  }
}

export const provideAuthService = () => [{provide: AuthService, useClass: AuthService}];
