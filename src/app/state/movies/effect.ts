import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesRepositoryService } from '../../services/movies-repository.service';
import * as Action from './action';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Movie } from './model';

@Injectable()
export class Effects {
  constructor(
    public actions$: Actions,
    private repository: MoviesRepositoryService,
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Action.load),
      switchMap(() =>
        this.repository.get().pipe(
          map((movies: Movie[]) => Action.loadedWithSuccess({ payload: movies })),
          catchError((error: string) => Rx.of(Action.loadedWithFailure({ payload: [], error }))),
        )
      )
    )
  );

  post$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Action.post),
      switchMap(() =>
        this.repository.post().pipe(
          map(() => Action.postWithSuccess()),
          tap(() => console.info('effect')),
          catchError((error: string) => Rx.of(Action.postWithFailure({ error })))
        ),
      ),
    ),
  );
}
