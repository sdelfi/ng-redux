import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoActions } from '../app.actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html'
})
export class TodoDashboardComponent {
  @select(s => s.get('todos')) $todos;
  @select(s => s.get('lastUpdate')) $lastUpdate;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  clearTodos() {
    this.ngRedux.dispatch(TodoActions.clearTodos());
  }
}
