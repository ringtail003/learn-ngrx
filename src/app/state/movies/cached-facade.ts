import * as Rx from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie, State } from './model';
import { Facade } from './facade';
import { Store } from '@ngrx/store';
import * as Selector from './selector';

@Injectable({
  providedIn: 'root'
})
export class CachedFacade implements Omit<Facade, 'movies$'> {
  private cache: Movie[] = [];

  constructor(
    private facade: Facade,
    private store: Store<State>,
  ) {
    this.store.select(Selector.get).subscribe((state) => {
      this.cache = state.payload;
    });
  }

  get() {
    if (this.cache.length) {
      return Rx.of(this.cache);
    }

    return this.facade.get();
  }

  post(movie: Movie) {
    return this.facade.post(movie);
  }
}
