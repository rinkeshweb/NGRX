import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { getToggle } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-custom-counter',
  imports: [InputGroupModule, InputTextModule, ButtonModule, FormsModule, AsyncPipe],
  templateUrl: './custom-counter.html',
  styleUrl: './custom-counter.css',
})
export class CustomCounter {
  private readonly store = inject<Store<{ counter: CounterState }>>(Store)
  readonly customInput = signal<number>(0);
  readonly toggleButton$ = this.store.select(getToggle);

  onCustomIncrease() {
    this.store.dispatch(customIncrement({ value: Number(this.customInput()) }))
  }

  showInput() {
    this.store.dispatch(toggleCustomInput())
  }

}
