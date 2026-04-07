import { error } from 'console';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/core/services/auth-service";
import { loginFailure, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, delay, exhaustMap, map, of, tap } from "rxjs";
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { LoadErrorMessage, loadingStart } from 'src/app/core/shared/state/shared.actions';

@Injectable({ providedIn: 'root' })

export class AuthEffects {
  private authService = inject(AuthService);
  private message = inject(MessageService);
  private router = inject(Router);
  private store = inject<Store<AppState>>(Store);
  private action$ = inject(Actions)

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginStart),
      exhaustMap(({ email, password }) => {
        this.store.dispatch(loadingStart({ isLoading: true }))
        return this.authService.login(email, password).pipe(
          delay(500),
          map((res) => {
            this.store.dispatch(loadingStart({ isLoading: false }))
            this.message.add({ severity: 'success', summary: 'Login Successful', detail: `You have successfully logged in ${res.email}`, life: 3000 })
            this.router.navigate(['/'])
            const loggedUser = this.authService.formateUserData(res);
            this.authService.saveUserInLocalStorage(loggedUser)
            return loginSuccess({ user: loggedUser })
          }),
          catchError((err) => {
            this.store.dispatch(loadingStart({ isLoading: false }))
            const message = this.authService.getErrorMessage(err);
            return of(LoadErrorMessage({ message: `${message}` }))
          })
        )
      })
    )
  );

  signup$ = createEffect(() =>
    this.action$.pipe(
      ofType(signupStart),
      exhaustMap(({ email, password }) => {
        this.store.dispatch(loadingStart({ isLoading: true }))
        return this.authService.signup(email, password).pipe(
          delay(500),
          map((res) => {
            this.store.dispatch(loadingStart({ isLoading: false }));
            this.message.add({ severity: 'success', summary: 'Signup Successful', detail: `You have successfully signup`, life: 3000 });
            this.router.navigate(['/auth/login']);
            const singedUser = this.authService.formateUserData(res);
            this.authService.saveUserInLocalStorage(singedUser)
            return signupSuccess({ user: singedUser });
          }),
          catchError((err) => {
            this.store.dispatch(loadingStart({ isLoading: false }))
            const message = this.authService.getErrorMessage(err);
            return of(LoadErrorMessage({ message: `${message}` }))
          })
        )
      })
    )
  );

}
