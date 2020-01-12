import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import * as Rx from 'rxjs';
import { Store } from '@ngrx/store';
import * as MovieAction from '../movie.actions';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies$: Rx.Observable<Movie[]> = this.store.select((state) => state.movies.payload);

  constructor(
    private store: Store<{ movies: { payload: Movie[] } }>,
  ) { }

  ngOnInit() {
    this.store.dispatch(MovieAction.load());
  }

}
