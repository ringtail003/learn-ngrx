import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import * as MoviesState from '../../state/movies/index';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies$: Rx.Observable<MoviesState.Movie[]> = null;

  constructor(
    private repository: MoviesState.Facade,
  ) { }

  ngOnInit() {
    this.movies$ = this.repository.get();
  }

}
