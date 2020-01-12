import { createReducer, on, Action } from "@ngrx/store";
import * as MovieActions from './movie.actions';
import { Movie } from './movie.model';

const initialState = {
  payload: [],
};

const _moviesReducer = createReducer(initialState,
  on(
    MovieActions.loadedWithSuccess,
    (state, { payload }) => ({ payload })
  ),
);

export function moviesReducer(state: { payload: Movie[] }, action: Action) {
  return _moviesReducer(state, action);
}
