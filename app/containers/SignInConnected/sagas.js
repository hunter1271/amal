import { call, getContext, put, takeLatest, select } from 'redux-saga/effects';
import { usernameSelector, passwordSelector } from './selectors';
import { signInSuccess, signInFail, SIGN_IN_REQUEST } from './ducks';

export default function* () {
  yield takeLatest(SIGN_IN_REQUEST, requestSaga);
}

export function* requestSaga() {
  const api = yield getContext('api');
  const username = yield select(usernameSelector);
  const password = yield select(passwordSelector);

  const { response } = yield call(api.auth.authenticate, username, password);

  if (response) {
    yield put(signInSuccess(response));
  } else {
    yield put(signInFail('Authentication error'));
  }
}
