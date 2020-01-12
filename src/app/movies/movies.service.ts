import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
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
