import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { Movie } from '../state/movies/model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService {
  private movies: Movie[] = [
    { title: 'a' },
    { title: 'b' },
  ];

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(): Rx.Observable<Movie[]> {
    console.info('get called.');

    // return this.httpClient.get<Movie[]>('/hoge/fuga').pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     throw new Error(`${error.status} ${error.statusText}`);
    //   }),
    // );

    return Rx.of(this.movies).pipe(
      delay(2000),
    );
  }

  post(movie: Movie): Rx.Observable<void | any[]> {
    // return this.httpClient.post('/hoge/fuga', {}).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     throw new Error(`${error.status} ${error.statusText}`);
    //   }),
    // );

    this.movies.push(movie);

    return Rx.of(null).pipe(
      delay(2000),
    );
  }
}
