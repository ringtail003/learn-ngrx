import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './model';

const getState = createFeatureSelector<State>('movies');

export const get = createSelector(
  getState,
  (state) => state,
);
