import { fromJS } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('authentication');

const AUTHENTICATE = ducks.defineType('SET_USER');
const LOGOUT = ducks.defineType('LOGOUT');

export const authenticate = ducks.createAction(AUTHENTICATE);
export const logout = ducks.createAction(LOGOUT);

const initialState = fromJS({
  token: null,
  user: null,
  roles: [],
});

export default ducks.createReducer(
  {
    [AUTHENTICATE]: (state, { payload }) =>
      state
        .set('token', payload.token)
        .set('user', payload.user)
        .set('roles', payload.roles),
    [LOGOUT]: (state) =>
      state
        .set('token', null)
        .set('user', null)
        .set('roles', []),
  },
  initialState
);
