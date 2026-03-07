import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { AuthModel } from '../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private key = 'AIzaSyC4xoNfgblpdglnQljXTdHGZUJIn8rdk64'
  private path = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`;

  private http = inject(HttpClient);
  private router = inject(Router);
  _displayUser = signal<AuthModel | null>(null)
  displayUser = this._displayUser.asReadonly();


  login(email: string, password: string) {
    return this.http.post<AuthModel>(`${this.path}`, { email, password, returnSecureToken: true }).pipe(
      tap((user) => {
        this._displayUser.set(user);
        this.router.navigateByUrl('/');
      }),
      catchError((error) => {
        return throwError(() => error)
      })
    )
  }

}
