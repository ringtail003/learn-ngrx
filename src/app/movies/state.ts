import { Movie } from './movie.model';

export const stateName = 'movies';

export interface MovieState {
  payload: Movie[],
  error?: string,
}
