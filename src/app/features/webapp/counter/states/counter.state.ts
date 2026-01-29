export interface CounterState {
  counter: number,
  isLoading: boolean
}

export const initialState: CounterState = {
  counter: 0,
  isLoading: false
}
