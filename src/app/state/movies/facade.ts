import { Store, select } from '@ngrx/store';
import { State, Movie } from './model';
import * as Action from './action';
import * as Selector from './selector';
import { tap, map } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Facade {
  private movies$ = this.store.pipe(
    select(Selector.get),
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

  get(): Rx.Observable<Movie[]> {
    this.store.dispatch(Action.load());

    return this.movies$;
  }
}
