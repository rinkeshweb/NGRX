export interface sharedState {
  isLoading: boolean,
  errorMessage: string,
}

export const initialState: sharedState = {
  isLoading: false,
  errorMessage: ''
}
