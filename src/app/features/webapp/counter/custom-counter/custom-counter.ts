import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CounterState } from '../states/counter.state';
import { customIncrement } from '../states/counter.actions';

@Component({
  selector: 'app-custom-counter',
  imports: [InputGroupModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './custom-counter.html',
  styleUrl: './custom-counter.css',
})
export class CustomCounter {
  private readonly store = inject<Store<{ counter: CounterState }>>(Store)
  readonly customInput = signal<number>(0);

  onCustomIncrease() {
    this.store.dispatch(customIncrement({ value: Number(this.customInput()) }))
  }
}
