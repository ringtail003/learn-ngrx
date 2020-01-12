import { createAction, props } from '@ngrx/store';
import { State } from './model';

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
