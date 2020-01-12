import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  get(): Rx.Observable<Movie[]> {
    return Rx.of([
      { title: 'a' },
      { title: 'b' },
    ]).pipe(
      delay(2000),
    );
  }
}
