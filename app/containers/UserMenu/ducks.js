import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('userMenu');

export const USER_MENU_OPEN = ducks.defineType('USER_MENU_OPEN');
export const USER_MENU_CLOSE = ducks.defineType('USER_MENU_CLOSE');

export const userMenuOpen = ducks.createAction(USER_MENU_OPEN);
export const userMenuClose = ducks.createAction(USER_MENU_CLOSE);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [USER_MENU_OPEN]: (state) => state.set('open', true),
    [USER_MENU_CLOSE]: (state) => state.set('open', false),
  },
  initialState
);
