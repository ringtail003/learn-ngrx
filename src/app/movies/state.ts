import { Movie } from './movie.model';

export interface MovieState {
  payload: Movie[],
  error?: string,
}
