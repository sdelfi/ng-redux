import { Injectable } from '@angular/core';
import { Action, AnyAction } from 'redux';
import { IToDo } from './store';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  static increment(): Action {
    return { type: this.INCREMENT };
  }

  static decrement(): Action {
    return { type: this.DECREMENT };
  }
}

@Injectable()
export class TodoActions {
  static ADD_TODOS = 'ADD_TODOS';
  static ADD_TODO = 'ADD_TODO';
  static TOGGLE_TODO = 'TOGGLE_TODO';
  static REMOVE_TODO = 'REMOVE_TODO';
  static CLEAR_TODOS = 'CLEAR_TODOS';

  static addTodos(todos: IToDo[]): AnyAction {
    return { type: this.ADD_TODOS, todos: todos };
  }

  static addTodo(title: string): AnyAction {
    return { type: this.ADD_TODO, title };
  }

  static toggleTodo(id): AnyAction {
    return { type: this.TOGGLE_TODO, id };
  }

  static removeTodo(id): AnyAction {
    return { type: this.REMOVE_TODO, id };
  }

  static clearTodos(): Action {
    return { type: this.CLEAR_TODOS };
  }
}