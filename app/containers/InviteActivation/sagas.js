import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REQUEST, SUCCESS, success, fail } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
  yield takeLatest(SUCCESS, redirectSaga);
}

export function* requestSaga({ payload: { hash } }) {
  const api = yield getContext('api');

  const { response, error } = yield call(api.auth.activateInvite, hash);

  if (response) {
    yield put(success());
  } else {
    yield put(fail(error));
  }
}

export function* redirectSaga() {
  yield put(push('/profile'));
}
