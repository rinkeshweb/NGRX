import { counterReducer } from "src/app/features/webapp/counter/states/counter.reducer";
import { CounterState } from "src/app/features/webapp/counter/states/counter.state";
import { coursesReducer } from "src/app/features/webapp/courses/state/courses.reducer";
import { CoursesState } from "src/app/features/webapp/courses/state/courses.state";

export interface appState {
  counter: CounterState,
  courses: CoursesState
}

export const appReducer = {
  counter: counterReducer,
  courses: coursesReducer
}
