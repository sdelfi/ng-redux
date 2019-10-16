import { IToDo } from 'src/app/interfaces/todo.interface';
import { createAction, props, union } from '@ngrx/store';

export const getTodos = createAction(
    '[TODOS] Request'
);

export const getTodosSuccess = createAction(
    '[TODOS] Request Success',
    props<{ todos: IToDo[] }>()
);

export const createTodo = createAction(
    '[TODOS] Create',
    props<{ todo: IToDo }>()
);

export const selectTodo = createAction(
    '[Todo list] Select',
    props<{ todo: IToDo }>()
);

export const updateTodo = createAction(
    '[TODOS] Update',
    props<{ id: number, changes: Partial<IToDo> }>()
);

export const deleteTodo = createAction(
    '[TODOS] Delete',
    props<{ id: number }>()
);

export const setLastUpdate = createAction(
    '[TODOS] Set Last Update Date',
    (date = new Date()) => ({ date })
);

export const clearTodos = createAction(
    '[TODOS] Clear',
);

// const actions = union({
//     getTodos, getTodosSuccess, createTodo,
//     selectTodo, updateTodo, deleteTodo, clearTodos
// });

// export type todosActions = typeof actions;