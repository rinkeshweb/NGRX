import { Routes } from '@angular/router';
import { WEB_ROUTES } from './features/webapp/web.routes';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./features/layout/webapp-layout').then(c => c.WebappLayout),
    children: WEB_ROUTES
  }
];
