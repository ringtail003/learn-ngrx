import { createAction, props } from '@ngrx/store';
import { State, Movie } from './model';

export const load = createAction(
  '[Movie API] Load movies',
);

export const loadedWithSuccess = createAction(
  '[Movie API] Load movies successed',
  props<State>(),
);

export const loadedWithFailure = createAction(
  '[Movie API] Load movies failed',
  props<State>(),
);

export const post = createAction(
  '[Movie API] Post movies',
  props<{ payload: Movie }>(),
);

export const postWithSuccess = createAction(
  '[Movie API] Post movies successed',
);

export const postWithFailure = createAction(
  '[Movie API] Post movies failed',
  props<{ error: string }>(),
);

