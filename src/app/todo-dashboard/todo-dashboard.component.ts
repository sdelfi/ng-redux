import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as todosActions from '../store/actions/todos.actions';
import { getLastUpdate, selectTotal } from '../store/selectors/todos.selectors';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html'
})
export class TodoDashboardComponent {
  todosCount$ = this._store.pipe(select(selectTotal));;
  lastUpdate$ = this._store.pipe(select(getLastUpdate));

  constructor(private _store: Store<IAppState>) { }

  clearTodoss() {
    this._store.dispatch(todosActions.clearTodos());
  }
}
