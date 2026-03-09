import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';
import { getLoading } from './core/shared/state/shared.selector';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, ProgressSpinnerModule, CardModule],
  template: `
  <p-toast />
  @if(isLoading$()){
    <p-card class="h-screen flex! justify-center items-center">
      <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
     </p-card>
  } @else {
    <router-outlet></router-outlet>
  }
  `,
})
export class App {
  private store = inject<Store<AppState>>(Store)
  readonly isLoading$ = this.store.selectSignal(getLoading);
}
