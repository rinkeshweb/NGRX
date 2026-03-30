import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import * as AuthActions from './auth.actions';


export const authReducer = createReducer(
  initialState,
  // Login
  on(AuthActions.loginStart, () => ({ ...initialState })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, })),
  // Signup
  on(AuthActions.signupStart, () => ({ ...initialState })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
)
