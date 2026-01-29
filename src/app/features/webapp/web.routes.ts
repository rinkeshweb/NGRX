import { Routes } from "@angular/router";

export const WEB_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(c => c.Home) },
  { path: 'counter', loadComponent: () => import('./counter/counter').then(c => c.Counter) },
  { path: 'courses', loadComponent: () => import('./courses/courses').then(c => c.Courses) },
]
