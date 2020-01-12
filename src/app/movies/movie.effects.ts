import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from './movies.service';
import * as MovieAction from './movie.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as Rx from 'rxjs';

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
          map((movies) => MovieAction.loadedWithSuccess({ movies })),
          catchError((error) => Rx.of(MovieAction.loadedWithFailure({ error }))),
        )
      )
    )
  );
}
