import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('auth');

export const TOGGLE_SIDEBAR = ducks.defineType('TOGGLE_SIDEBAR');

export const toggleSidebar = ducks.createAction(TOGGLE_SIDEBAR);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [TOGGLE_SIDEBAR]: (state) => state.set('open', !state.get('open')),
  },
  initialState
);
