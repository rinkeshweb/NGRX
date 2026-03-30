import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AUTH_STATE } from "src/app/constants";
import { AuthState } from "./auth.state";

export const AuthLoginSelector = createFeatureSelector<AuthState>(AUTH_STATE);

export const selectUser = createSelector(AuthLoginSelector, (state: AuthState) => state.user);
// export const selectLoading = createSelector(AuthLoginSelector, (state: AuthState) => state.loading);
// export const selectError = createSelector(AuthLoginSelector, (state: AuthState) => state.error);

export const selectUserSignup = createSelector(AuthLoginSelector, (state: AuthState) => state.user);
// export const selectLoadingSignup = createSelector(AuthLoginSelector, (state: AuthState) => state.loading);
// export const selectErrorSignup = createSelector(AuthLoginSelector, (state: AuthState) => state.error);
