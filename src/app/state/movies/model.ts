export interface State {
  payload: Movie[],
  error?: string,
}

export interface Movie {
  title: string;
}
