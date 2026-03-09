import { createAction, props } from "@ngrx/store";

export const loadingStart = createAction('[Shared] Loading Start', props<{ isLoading: boolean }>())
export const LoadErrorMessage = createAction('[Shared] Get Error Message', props<{ message: string }>())
