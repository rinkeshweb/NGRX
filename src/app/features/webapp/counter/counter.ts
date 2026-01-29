import { Component, input, signal } from '@angular/core';
import { CounterValue } from "./counter-value/counter-value";
import { CounterButton } from "./counter-button/counter-button";
import { CustomCounter } from "./custom-counter/custom-counter";

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton, CustomCounter],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

}
