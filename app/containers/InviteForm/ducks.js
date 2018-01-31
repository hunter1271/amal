import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('inviteForm');

export const REQUEST = ducks.defineType('REQUEST');
export const OPEN = ducks.defineType('OPEN');
export const CLOSE = ducks.defineType('CLOSE');

export const request = ducks.createAction(REQUEST);
export const open = ducks.createAction(OPEN);
export const close = ducks.createAction(CLOSE);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [REQUEST]: (state) => state,
    [OPEN]: (state) => state.set('open', true),
    [CLOSE]: (state) => state.set('open', false),
  },
  initialState
);
