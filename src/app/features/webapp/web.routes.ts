import { Routes } from "@angular/router";
import { provideState } from "@ngrx/store";
import { COUNTER_STATE, COURSES_STATE } from "src/app/constants";
import { counterReducer } from "./counter/states/counter.reducer";
import { coursesReducer } from "./courses/state/courses.reducer";
import { provideEffects } from "@ngrx/effects";
import { AuthEffects } from "../auth/state/auth.effects";

export const WEB_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(c => c.Home) },
  { path: 'counter', loadChildren: () => import('./counter/counter-module').then(m => m.CounterModule), providers: [provideState(COUNTER_STATE, counterReducer)] },
  { path: 'courses', loadChildren: () => import('./courses/courses-module').then(m => m.CoursesModule), providers: [provideState(COURSES_STATE, coursesReducer)] },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule), providers: [provideEffects(AuthEffects)] }
]
