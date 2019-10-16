import { Component } from '@angular/core';
import * as todoActions from '../store/actions/todos.actions';
import { TodoService } from './todo.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectAll } from '../store/selectors/todos.selectors';
import { IToDo } from '../interfaces/todo.interface';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  todos$ = this._store.pipe(select(selectAll));

  constructor(
    private _store: Store<IAppState>,
  ) {
    // this.service.getTodos().subscribe((todos: IToDo[]) => {
    //   this._store.dispatch(todoActions.fetchTodoSuccess({ todos }));
    // })
  }

  ngOnInit(): void {
    this._store.dispatch(todoActions.getTodos());
  }

  async addTodo(input: HTMLInputElement) {
    if (!input.value) return;

    const todos = await this.todos$.pipe(take(1)).toPromise();
    const maxId = Math.max.apply(Math, todos.map(function (o) { return o.id; }));

    const todo: IToDo = {
      id: maxId > 0 ? maxId + 1 : 1,
      completed: false,
      title: input.value
    }

    console.log(todo);

    this._store.dispatch(todoActions.createTodo({ todo }));

    input.value = '';
  }

  toggleTodo(todo: IToDo) {
    this._store.dispatch(todoActions.updateTodo({ id: todo.id, changes: { completed: !todo.completed } }));
  }

  removeTodo(todo: IToDo) {
    this._store.dispatch(todoActions.deleteTodo({ id: todo.id }));
  }
}