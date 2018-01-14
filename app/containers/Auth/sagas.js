import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { signInSuccess, signInFail, SIGN_IN_REQUEST } from './ducks';

export default function* () {
  yield takeLatest(SIGN_IN_REQUEST, requestSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  const { response } = yield call(
    api.auth.token,
    values.username,
    values.password
  );

  if (response) {
    yield put(signInSuccess(response));
    resolve();
    yield put(push('/'));
  } else {
    yield put(signInFail('Authentication error'));
    reject();
  }
}
