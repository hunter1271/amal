import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST, SUCCESS, success } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
  yield takeLatest(SUCCESS, redirectSaga);
}

export function* requestSaga() {
  yield put(success());
}

export function* redirectSaga() {
  // redirect to profile page.
  yield put(success());
}
