import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { Movie } from '../state/movies/model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(): Rx.Observable<Movie[]> {
    // return this.httpClient.get<Movie[]>('/hoge/fuga').pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     throw new Error(`${error.status} ${error.statusText}`);
    //   }),
    // );

    return Rx.of([
      { title: 'a' },
      { title: 'b' },
    ]).pipe(
      delay(2000),
    );
  }
}
