import { createEntityAdapter } from '@ngrx/entity';
import { IToDo } from 'src/app/interfaces/todo.interface';
import { ITodosState } from '../state/todos.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoAdapter = createEntityAdapter<IToDo>();

export const getTodosState = createFeatureSelector<ITodosState>('todos');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = todoAdapter.getSelectors(getTodosState);

export const selectCurrentTodoId = createSelector(
    getTodosState,
    (state: ITodosState) => state.selectedTodoId
);

export const getLastUpdate = createSelector(
    getTodosState,
    (state: ITodosState) => state.lastUpdate
);