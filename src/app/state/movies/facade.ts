import { Store, select } from '@ngrx/store';
import { State, Movie } from './model';
import * as Action from './action';
import * as Selector from './selector';
import { Effects } from './effect';
import { tap, map } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Injectable } from '@angular/core';
import { MoviesRepositoryService } from 'src/app/services/movies-repository.service';
import { ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class Facade implements Omit<MoviesRepositoryService, 'constructor'> {
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
    private effect: Effects,
  ) {}

  get() {
    this.store.dispatch(Action.load());

    return this.movies$;
  }

  post(movie: Movie) {
    this.store.dispatch(Action.post({ payload: movie }));

    return this.effect.actions$.pipe(
      ofType(
        Action.postWithSuccess,
        Action.postWithFailure,
      ),
      tap(() => this.store.dispatch(Action.load())),
      map(() => null),
    );
  }
}
