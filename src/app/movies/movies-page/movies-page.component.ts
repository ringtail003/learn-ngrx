import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieService.get().subscribe(movies => this.movies = movies);
  }

}
