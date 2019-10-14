import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoActions } from '../app.actions';
import { TodoService } from './todo.service';
import { IToDo } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @select(s => s.get('todos')) $todos;

  constructor(
    private ngRedux: NgRedux<Map<string, any>>,
    private service: TodoService
  ) {
    this.service.getTodos().subscribe((todos: IToDo[]) => {
      this.ngRedux.dispatch(TodoActions.addTodos(todos));
    })
  }

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch(TodoActions.addTodo(input.value));

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch(TodoActions.toggleTodo(todo.id));
  }

  removeTodo(todo) {
    this.ngRedux.dispatch(TodoActions.removeTodo(todo.id));
  }
}