import { initialCountersState } from '../state/counters.state';
import * as counterActions from '../actions/counters.actions';
import { createReducer, on } from '@ngrx/store';

export const countersReducer = createReducer(
    initialCountersState,
    on(counterActions.increment, state => {
        return { ...state, counter: state.counter + 1 };
    }),
    on(counterActions.decrement, state => {
        return { ...state, counter: state.counter - 1 };
    })
);