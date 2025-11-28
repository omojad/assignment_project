import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'; // 👈 Import this
import { Store, StoreModule } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-global-state',
  standalone: true,
  imports: [AsyncPipe], // 👈 Add it here
  templateUrl: './global-state.html',
  styleUrls: ['./global-state.scss']
})
export class GlobalState {

  count$; // declare first

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter'); // ✅ safe initialization
  }

  onIncrement() { this.store.dispatch(increment()); }
  onDecrement() { this.store.dispatch(decrement()); }
  onReset() { this.store.dispatch(reset()); }
}