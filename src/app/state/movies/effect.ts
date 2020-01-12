import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../services/movies.service';
import * as Action from './action';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Movie } from './model';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private movieService: MoviesService,
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Action.load),
      switchMap(() =>
        this.movieService.get().pipe(
          map((movies: Movie[]) => Action.loadedWithSuccess({ payload: movies })),
          catchError((error: string) => Rx.of(Action.loadedWithFailure({ payload: [], error }))),
        )
      )
    )
  );
}
