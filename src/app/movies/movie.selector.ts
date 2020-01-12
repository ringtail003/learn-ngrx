import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState, stateName } from './state';

const getState = createFeatureSelector<MovieState>(stateName);

export const get = createSelector(
  getState,
  (state) => state,
);
