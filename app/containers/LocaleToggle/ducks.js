import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

const ducks = createDuck('localeToggle');

export const TOGGLE_OPEN = ducks.defineType('TOGGLE_OPEN');
export const toggleOpen = ducks.createAction(TOGGLE_OPEN);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [TOGGLE_OPEN]: (state) => state.set('open', !state.get('open')),
  },
  initialState
);
