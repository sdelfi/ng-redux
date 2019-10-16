import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICountersState } from '../state/counters.state';

const selectCounters = (state: IAppState) => state.counters;

export const getCounter = createSelector(
    selectCounters,
    (state: ICountersState) => state.counter
);

export const getNewMessagesCount = createSelector(
    selectCounters,
    (state: ICountersState) => state.messaging.newMessages
);