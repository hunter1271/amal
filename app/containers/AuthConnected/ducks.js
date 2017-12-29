import { fromJS, Map } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('auth');

export const SIGN_IN_REQUEST = ducks.defineType('SIGN_IN_REQUEST');
export const SIGN_IN_SUCCESS = ducks.defineType('SIGN_IN_SUCCESS');
export const SIGN_IN_FAIL = ducks.defineType('SIGN_IN_FAIL');

export const signInRequest = ducks.createAction(SIGN_IN_REQUEST);
export const signInSuccess = ducks.createAction(SIGN_IN_SUCCESS);
export const signInFail = ducks.createAction(SIGN_IN_FAIL);

const initialState = fromJS({
  username: 'test',
  password: 'pwd',
  loading: false,
  userData: {},
  access_token: null,
  refresh_token: null,
  error: null,
});

export default ducks.createReducer(
  {
    [SIGN_IN_REQUEST]: (state) => state.set('loading', true).set('error', null),
    [SIGN_IN_SUCCESS]: (state, { payload }) =>
      state
        .set('loading', false)
        .set('userData', Map(payload.userData))
        .set('access_token', payload.accessToken)
        .set('refresh_token', payload.refreshToken)
        .set('error', null),
    [SIGN_IN_FAIL]: (state, { payload }) =>
      state.set('loading', false).set('error', payload),
  },
  initialState
);
