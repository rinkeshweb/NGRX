import { User } from "src/app/core/models/user.model";

export interface AuthState {
  user: User | null,
}

export const InitialState: AuthState = {
  user: null,
}
