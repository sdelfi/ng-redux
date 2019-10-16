import { ActionReducerMap } from '@ngrx/store';
import { todosReducer } from './todos.reducers';
import { ITodosState } from '../state/todos.state';
import { ICountersState } from '../state/counters.state';
import { countersReducer } from './counters.reducers';

export interface AppState {
    todos: ITodosState,
    counters: ICountersState
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todosReducer,
    counters: countersReducer
};