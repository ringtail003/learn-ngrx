import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { State } from './model';
import * as Actions from './action';
import * as Selectors from './selector';
import { tap, map } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Injectable()
export class TodoFacade {
  movies$ = this.store.pipe(
    select(Selectors.get),
    tap((state) => {
      if (state.error) {
        console.warn(`[state.error]: ${state.error}`);
        return Rx.EMPTY;
      };
    }),
    map((state) => state.payload),
  );

  constructor(
    private store: Store<State>,
  ) {}

  get() {
    this.store.dispatch(Actions.load());
  }
}
