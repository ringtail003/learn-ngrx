import { createAction, props } from '@ngrx/store';
import { Movie } from './movie.model';

export const load = createAction(
  '[Movie API] Load movies',
);

export const loadedWithSuccess = createAction(
  '[Movie API] Load movies successed',
  props<{ movies: Movie[] }>(),
);

export const loadedWithFailure = createAction(
  '[Movie API] Load movies failed',
  props<{ error: any }>(),
);
