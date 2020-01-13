import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import * as MoviesState from '../../state/movies/index';
import { MoviesRepositoryService } from 'src/app/services/movies-repository.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  providers: [
    { provide: MoviesRepositoryService, useClass: MoviesState.CachedFacade },
  ],
})
export class MoviesPageComponent implements OnInit {
  movies$: Rx.Observable<MoviesState.Movie[]> = null;
  pending = false;

  constructor(
    private repository: MoviesRepositoryService,
  ) { }

  ngOnInit() {
    this.movies$ = this.repository.get();
  }

  add() {
    this.pending = true;

    this.repository.post().subscribe(() => {
      this.pending = false;
    });
  }

}
