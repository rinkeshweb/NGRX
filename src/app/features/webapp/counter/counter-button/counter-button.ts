import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.actions';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-button',
  imports: [ButtonModule],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
  private readonly store = inject<Store<{ counter: CounterState }>>(Store);

  readonly countNumber = this.store.selectSignal(store => store.counter.counter);

  onDecrease() {
    this.store.dispatch(decrement())
  }

  onIncrease() {
    this.store.dispatch(increment())
  }

  onReset() {
    this.store.dispatch(reset())
  }

}
