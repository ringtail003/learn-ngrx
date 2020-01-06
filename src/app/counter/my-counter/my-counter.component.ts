import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/counter.actions';
import { nameIsFoo, nameIsBar } from 'src/app/name.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  name$: Observable<string>;

  constructor(
    private store: Store<{ count: number, name: string }>
  ) {
    this.count$ = store.pipe(select('count'));
    this.name$ = store.pipe(select('name'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setFoo() {
    this.store.dispatch(nameIsFoo());
  }

  setBar() {
    this.store.dispatch(nameIsBar());
  }
}
