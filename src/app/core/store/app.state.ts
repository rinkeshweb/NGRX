import { AuthState } from 'src/app/features/auth/state/auth.state';
import { AUTH_STATE, SHARED_STATE } from "src/app/constants";
import { authReducer } from "src/app/features/auth/state/auth.reducer";
import { sharedState } from '../shared/state/shared.state';
import { sharedReducer } from '../shared/state/shared.reducer';

export interface AppState {
  [AUTH_STATE]: AuthState;
  [SHARED_STATE]: sharedState,
}

export const appReducer = {
  [AUTH_STATE]: authReducer,
  [SHARED_STATE]: sharedReducer
};
