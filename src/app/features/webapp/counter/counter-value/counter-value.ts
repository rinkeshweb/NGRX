import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-value',
  imports: [AsyncPipe],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  private readonly store = inject<Store<{ counter: CounterState }>>(Store);

  readonly counter$ = this.store.select(getCounter);

}
