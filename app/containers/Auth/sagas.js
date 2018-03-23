import { call, getContext, put, takeLatest, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {} from 'containers/Authentication';
import {
  signInSuccess,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OFF,
} from './ducks';
import { setToken, unsetToken, getToken, setUser, getUser } from './storage';

export default function* () {
  yield fork(initFromStorage);

  yield takeLatest(SIGN_IN_REQUEST, requestSaga);
  yield takeLatest(SIGN_IN_SUCCESS, updateTokenSaga);
  yield takeLatest(SIGN_OFF, unsetTokenSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  try {
    const { token, user } = yield call(
      api.auth.token,
      values.email,
      values.password
    );

    yield put(signInSuccess({ token, user }));
    resolve();
    yield put(push('/'));
  } catch (error) {
    reject(error);
  }
}

export function* updateTokenSaga({ payload: { token, user } }) {
  yield fork(setToken, token);
  yield fork(setUser, user);
}

export function* unsetTokenSaga() {
  yield call(unsetToken);
}

export function* initFromStorage() {
  const token = yield call(getToken);
  const user = yield call(getUser);

  if (token) {
    yield put(signInSuccess({ token, user }));
  }
}
