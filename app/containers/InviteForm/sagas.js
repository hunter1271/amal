import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { close, REQUEST } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  const { response, errors } = yield call(api.admin.inviteUser, values.email);

  if (response) {
    resolve();
    yield put(close());
  } else {
    reject(errors);
  }
}
