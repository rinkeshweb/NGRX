import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

// Login
export const loginStart = createAction('[Auth] Login Start', props<{ email: string, password: string }>())
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>())
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>())

// Singup
export const signupStart = createAction('[Auth] Signup Start', props<{ email: string, password: string }>());
export const signupSuccess = createAction('[Auth] Signup Success', props<{ user: User }>());
export const signupFailure = createAction('[Auth] Signup Start', props<{ error: string }>());
