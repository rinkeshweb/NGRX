import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { FIREBASE_API_KEY } from 'src/app/constants';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

  private http = inject(HttpClient);
  private message = inject(MessageService);


  login(email: string, password: string) {
    return this.http.post<User>(`${this.path}`, { email, password, returnSecureToken: true })
  }

  getErrorMessage(error: HttpErrorResponse) {
    const errors: any = {
      INVALID_LOGIN_CREDENTIALS: 'Invalid email or password',
      EMAIL_EXISTS: 'Email already exists',
      USER_DISABLED: 'User account disabled'
    };
    return this.message.add({ severity: 'error', summary: 'Login Failed', detail: errors[error.error.error.message] || 'Something went wrong' });
  }

}
