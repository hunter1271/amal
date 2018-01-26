import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('inviteForm');

export const INVITE_FORM_REQUEST = ducks.defineType('FORM_REQUEST');
export const INVITE_FORM_OPEN = ducks.defineType('FORM_OPEN');
export const INVITE_FORM_CLOSE = ducks.defineType('INVITE_FORM_CLOSE');

export const inviteFormRequest = ducks.createAction(INVITE_FORM_REQUEST);
export const inviteFormOpen = ducks.createAction(INVITE_FORM_OPEN);
export const inviteFormClose = ducks.createAction(INVITE_FORM_CLOSE);

const initialState = fromJS({
  open: false,
});

export default ducks.createReducer(
  {
    [INVITE_FORM_OPEN]: (state) => state.set('open', true),
    [INVITE_FORM_CLOSE]: (state) => state.set('open', false),
  },
  initialState
);
