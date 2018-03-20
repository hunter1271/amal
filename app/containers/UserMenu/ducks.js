import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('userMenu');

export const OPEN = ducks.defineType('OPEN');
export const CLOSE = ducks.defineType('CLOSE');

export const userMenuOpen = ducks.createAction(OPEN);
export const userMenuClose = ducks.createAction(CLOSE);

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
