import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MovieAction from '../movie.actions';
import { MovieState } from '../state';
import * as TodoSelectors from './../movie.selector';
import { tap, map } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies$ = this.store.pipe(
    select(TodoSelectors.get),
    tap((state) => {
      if (state.error) {
        console.warn(`[state.error]: ${state.error}`);
        return Rx.EMPTY;
      };
    }),
    map((state) => state.payload),
  );

  constructor(
    private store: Store<{ movies: MovieState }>,
  ) { }

  ngOnInit() {
    this.store.dispatch(MovieAction.load());
  }

}
