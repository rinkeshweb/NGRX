import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "./shared.state";
import { SHARED_STATE } from "src/app/constants";

const getSharedState = createFeatureSelector<sharedState>(SHARED_STATE);

// shared Selecter
export const getLoading = createSelector(getSharedState, (state) => state.isLoading);
export const errorMessage = createSelector(getSharedState, (state) => state.errorMessage)
