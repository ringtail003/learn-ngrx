import { createAction, props } from '@ngrx/store';
import { Movie } from './movie.model';
import { MovieState } from './state';

export const load = createAction(
  '[Movie API] Load movies',
);

export const loadedWithSuccess = createAction(
  '[Movie API] Load movies successed',
  props<MovieState>(),
);

export const loadedWithFailure = createAction(
  '[Movie API] Load movies failed',
  props<{ error: any }>(),
);
