import { createAction } from '@ngrx/store';

// Simple counter actions used by the global-state component
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
