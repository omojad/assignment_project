// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../sidebar_menu/global-state/counter.actions'; // Ensure this file exists in the same directory

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, _ => 0)
);