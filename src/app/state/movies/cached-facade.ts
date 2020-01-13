import * as Rx from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie, State } from './model';
import { Facade } from './facade';
import { Store } from '@ngrx/store';
import * as Selector from './selector';

@Injectable({
  providedIn: 'root'
})
export class CachedFacade {
  private cache: Movie[] = [];

  constructor(
    private facade: Facade,
    private store: Store<State>,
  ) {
    this.store.select(Selector.get).subscribe((state) => {
      this.cache = state.payload;
    });
  }

  get(): Rx.Observable<Movie[]> {
    if (this.cache.length) {
      return Rx.of(this.cache);
    }

    return this.facade.get();
  }
}
