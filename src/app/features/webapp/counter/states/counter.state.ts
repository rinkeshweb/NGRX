export interface CounterState {
  counter: number,
  isLoading: boolean,
  toggle: boolean
}

export const initialState: CounterState = {
  counter: 0,
  isLoading: false,
  toggle: false
}
