import { Component } from '@angular/core';
import { CounterActions } from './app.actions';
import { NgRedux, select } from '@angular-redux/store';
import { Map } from 'immutable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-study';
  @select((s: Map<string, any>) => s.get('counter')) $counter: number;
  @select((s: Map<string, any>) => s.getIn(['messaging', 'newMessages'])) $newMessagesCount;
  // @select(['messaging', 'newMessages']) $newMessages;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    // ngRedux.subscribe(() => {
    //   console.log(ngRedux.getState());
    // })
  }

  increment() {
    this.ngRedux.dispatch(CounterActions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(CounterActions.decrement());
  }
}
