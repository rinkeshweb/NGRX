import { Component, computed, effect, inject, input, OnDestroy, OnInit, output, signal } from '@angular/core';
import { CounterService } from '../../../../core/services/counter-service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  private readonly store = inject<Store<{ counter: CounterState }>>(Store);

  readonly counter = this.store.selectSignal(state => state.counter.counter);
  readonly isLoading = this.store.selectSignal(state => state.counter.isLoading);

}
