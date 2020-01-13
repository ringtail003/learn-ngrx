import { createReducer, on, Action } from "@ngrx/store";
import * as StoreAction from './action';
import { State } from './model';

const initialState: State = {
  payload: [],
};

const _reducer = createReducer(initialState,
  on(
    StoreAction.loadedWithSuccess,
    (state, { payload }) => ({ payload })
  ),
  on(
    StoreAction.loadedWithFailure,
    (state, { payload, error }) => ({ payload, error })
  ),
  on(
    StoreAction.postWithSuccess,
  ),
  on(
    StoreAction.postWithFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
