import { fromJS, Map } from 'immutable';
import { createDuck } from 'redux-duck';

const ducks = createDuck('auth');

export const SIGN_IN_REQUEST = ducks.defineType('SIGN_IN_REQUEST');
export const SIGN_IN_SUCCESS = ducks.defineType('SIGN_IN_SUCCESS');
export const SIGN_IN_FAIL = ducks.defineType('SIGN_IN_FAIL');
export const SIGN_OFF = ducks.defineType('SIGN_OFF');

export const signInRequest = ducks.createAction(SIGN_IN_REQUEST);
export const signInSuccess = ducks.createAction(SIGN_IN_SUCCESS);
export const signInFail = ducks.createAction(SIGN_IN_FAIL);
export const signOff = ducks.createAction(SIGN_OFF);

const initialState = fromJS({
  signedIn: false,
  username: 'test',
  password: 'pwd',
  loading: false,
  userData: {},
  accessToken: null,
  refreshToken: null,
  error: null,
});

export default ducks.createReducer(
  {
    [SIGN_IN_REQUEST]: (state) => state.set('loading', true).set('error', null),
    [SIGN_IN_SUCCESS]: (state, { payload }) =>
      state
        .set('loading', false)
        .set('signedIn', true)
        .set('userData', Map(payload.userData))
        .set('accessToken', payload.accessToken)
        .set('refreshToken', payload.refreshToken)
        .set('error', null),
    [SIGN_IN_FAIL]: (state, { payload }) =>
      state.set('loading', false).set('error', payload),
    [SIGN_OFF]: (state) =>
      state
        .set('signedIn', false)
        .set('userData', Map({}))
        .set('accessToken', null)
        .set('refreshToken', null),
  },
  initialState
);
