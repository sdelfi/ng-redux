import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as countersActions from './store/actions/counters.actions';
import { ICountersState } from './store/state/counters.state';
import { getCounter, getNewMessagesCount } from './store/selectors/counters.selectors';
import { IAppState } from './store/state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-study';

  public counter$ = this._store.pipe(select(getCounter));
  public newMessagesCount$ = this._store.pipe(select(getNewMessagesCount));

  constructor(private _store: Store<IAppState>) { }


  increment() {
    this._store.dispatch(countersActions.increment());
  }

  decrement() {
    this._store.dispatch(countersActions.decrement());
  }
}
