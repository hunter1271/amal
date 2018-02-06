import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('inviteActivation');

export const REQUEST = ducks.defineType('REQUEST');
export const SUCCESS = ducks.defineType('SUCCESS');
export const FAIL = ducks.defineType('FAIL');

export const request = ducks.createAction(REQUEST);
export const success = ducks.createAction(SUCCESS);
export const fail = ducks.createAction(FAIL);

const initialState = fromJS({
  error: null,
});

export default ducks.createReducer(
  {
    [REQUEST]: (state) => state.set('error', null),
    [SUCCESS]: (state) => state.set('error', null),
    [FAIL]: (state, { payload }) => state.set('error', payload),
  },
  initialState
);
