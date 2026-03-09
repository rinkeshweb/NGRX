import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import * as SharedActions from './shared.actions';

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.loadingStart, (state, { isLoading }) => ({ ...state, isLoading })),
  on(SharedActions.LoadErrorMessage, (state, { message }) => ({ ...state, message })),
)
