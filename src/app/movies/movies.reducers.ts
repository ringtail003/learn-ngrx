import { createReducer, on, Action } from "@ngrx/store";
import * as MovieActions from './movie.actions';
import { MovieState } from './state';

const initialState: MovieState = {
  payload: [],
};

const _moviesReducer = createReducer(initialState,
  on(
    MovieActions.loadedWithSuccess,
    (state, { payload }) => ({ payload })
  ),
);

export function moviesReducer(state: MovieState, action: Action) {
  return _moviesReducer(state, action);
}
