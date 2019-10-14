import { CounterActions, TodoActions } from './app.actions';
import { Map, List, fromJS } from 'immutable';


export interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed?: boolean
}

// export interface IAppState {
//     counter: number;
//     messaging?: {
//         newMessages: number
//     },
//     todos: IToDo[],
//     lastUpdate: Date
// }

export const INITIAL_STATE = {
    counter: 0,
    messaging: {
        newMessages: 5
    },
    todos: [],
    lastUpdate: null
}

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case CounterActions.INCREMENT:
            // return { ...state, counter: state.counter + 1 };
            return state.set('counter', state.get('counter') + 1);

        case CounterActions.DECREMENT:
            return state.set('counter', state.get('counter') - 1);

        case TodoActions.ADD_TODOS:
            return state.set('todos', List(action.todos));

        case TodoActions.ADD_TODO:
            return state
                .set('lastUpdate', new Date())
                .update('todos',
                    (list: IToDo[]) => list.unshift(<IToDo>{ id: state.get('todos').size + 1, title: action.title })
                );

        case TodoActions.TOGGLE_TODO:
            var todo = state.get('todos').find((t: IToDo) => t.id === action.id);
            var index = state.get('todos').indexOf(todo);

            return state
                .updateIn(['todos', index], (t: IToDo) => { return { ...t, completed: !todo.completed } })
                .set('lastUpdate', new Date())

        case TodoActions.REMOVE_TODO:
            return state
                .set('lastUpdate', new Date())
                .set('todos', state.get('todos').filter((t: IToDo) => t.id !== action.id))

        case TodoActions.CLEAR_TODOS:
            return state
                .set('lastUpdate', new Date())
                .set('todos', List());
    }

    return state;
}