import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from './movies.service';
import * as MovieAction from './movie.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Movie } from './movie.model';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MoviesService,
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieAction.load),
      switchMap(() =>
        this.movieService.get().pipe(
          map((movies: Movie[]) => MovieAction.loadedWithSuccess({ payload: movies })),
          catchError((error: string) => Rx.of(MovieAction.loadedWithFailure({ payload: [], error }))),
        )
      )
    )
  );
}
