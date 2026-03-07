import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';
import { appState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-counter-value',
  imports: [AsyncPipe],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  private store = inject<Store<appState>>(Store);

  readonly counter$ = this.store.select(getCounter);

}
