import { createAction } from '@ngrx/store';

export const increment = createAction(
    '[COUNTER] Increment'
);

export const decrement = createAction(
    '[COUNTER] Decrement'
);