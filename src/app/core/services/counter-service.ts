import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly _count = signal(0);
  readonly count = this._count;

  increase() {
    this.count.update(v => v + 1);
  }

  decrease() {
    if (this.count() > 0) {
      this.count.update(v => v - 1);
    }
  }

  reset() {
    this.count.set(0);
  }
}
