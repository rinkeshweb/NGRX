import { createReducer, on } from "@ngrx/store";
import { InitialState } from "./auth.state";
import * as AuthActions from './auth.actions';


export const authReducer = createReducer(
  InitialState,
  on(AuthActions.loginStart, () => ({ ...InitialState })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, }))
)
