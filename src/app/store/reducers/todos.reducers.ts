import { initialTodosState, ITodosState } from '../state/todos.state';
import * as todosActions from '../actions/todos.actions';

import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { IToDo } from 'src/app/interfaces/todo.interface';

export const todoAdapter = createEntityAdapter<IToDo>();
export const initialState: ITodosState = todoAdapter.getInitialState(initialTodosState);

export const todosReducer = createReducer(
    initialState,
    on(todosActions.getTodosSuccess,
        (state, { todos }) => todoAdapter.addAll(todos, state)
    ),
    on(todosActions.createTodo,
        (state, { todo }) => todoAdapter.addOne(todo, state)
    ),
    on(todosActions.updateTodo,
        (state, { id, changes }) => todoAdapter.updateOne({ id: id, changes: changes }, state)
    ),
    on(todosActions.selectTodo,
        (state, { todo }): ITodosState => {
            return {
                ...state,
                selectedTodoId: todo.id
            };
        }
    ),
    on(todosActions.deleteTodo,
        (state, { id }) => todoAdapter.removeOne(id, state)
    ),
    on(todosActions.clearTodos,
        (state) => todoAdapter.removeAll(state)
    ),
    on(todosActions.setLastUpdate,
        (state, { date }) => {
            return { ...state, lastUpdate: date }
        }
    )
);