import { ITodosState, initialTodosState } from './todos.state';
import { ICountersState, initialCountersState } from './counters.state';

export interface IAppState {
    //    router?: RouterReducerState,
    todos: ITodosState,
    counters: ICountersState
}

export const initialAppState: IAppState = {
    todos: initialTodosState,
    counters: initialCountersState
};

export function getInitialState(): IAppState {
    return initialAppState
}