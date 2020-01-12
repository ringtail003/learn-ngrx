import { createReducer, on, Action } from "@ngrx/store";
import * as MovieActions from './movie.actions';
import { Movie } from './movie.model';

const initialState = {
  movies: [],
};

const _moviesReducer = createReducer(initialState,
  on(
    MovieActions.loadedWithSuccess,
    (state, { movies }) => ({ movies })
  ),
);

export function moviesReducer(state: { movies: Movie[] }, action: Action) {
  return _moviesReducer(state, action);
}
