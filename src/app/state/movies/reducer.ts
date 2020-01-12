import { createReducer, on, Action } from "@ngrx/store";
import * as Actions from './action';
import { State } from './model';

const initialState: State = {
  payload: [],
};

const _reducer = createReducer(initialState,
  on(
    Actions.loadedWithSuccess,
    (state, { payload }) => ({ payload })
  ),
  on(
    Actions.loadedWithFailure,
    (state, { payload, error }) => ({ payload, error })
  ),
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
