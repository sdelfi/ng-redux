import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from 'src/app/todo-list/todo.service';
import { IAppState } from '../state/app.state';
import * as todosActions from '../actions/todos.actions';
import { switchMap } from 'rxjs/operators';
import { IToDo } from 'src/app/interfaces/todo.interface';

@Injectable()
export class TodosEffects {
    @Effect() getTodos$: Observable<Action> = this._actions$.pipe(
        ofType(todosActions.getTodos),
        switchMap(() => this._todoService.getTodos()),
        switchMap((todos: IToDo[]) => {
            return of(todosActions.getTodosSuccess({ todos }));
        })
    );

    @Effect() updateDate$: Observable<Action> = this._actions$.pipe(
        ofType(todosActions.createTodo, todosActions.deleteTodo, todosActions.getTodosSuccess, todosActions.clearTodos),
        switchMap(() => of(todosActions.setLastUpdate()))
    );

    constructor(
        private _todoService: TodoService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}