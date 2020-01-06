import { createReducer, on } from "@ngrx/store";
import { nameIsFoo, nameIsBar } from './name.actions';

const initialState = '';

const _nameReducer = createReducer(initialState,
  on(nameIsFoo, state => 'foo'),
  on(nameIsBar, state => 'bar'),
);

export function nameReducer(state, action) {
  return _nameReducer(state, action);
}