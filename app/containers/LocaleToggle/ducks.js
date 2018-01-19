import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

const ducks = createDuck('localeToggle');

export const OPEN = ducks.defineType('OPEN');
export const CLOSE = ducks.defineType('CLOSE');
export const open = ducks.createAction(OPEN);
export const close = ducks.createAction(CLOSE);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [OPEN]: (state) => state.set('open', true),
    [CLOSE]: (state) => state.set('open', false),
  },
  initialState
);
