import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { inviteFormClose, INVITE_FORM_REQUEST } from './ducks';

export default function* () {
  yield takeLatest(INVITE_FORM_REQUEST, requestSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  const { response, errors } = yield call(api.admin.inviteUser, values.email);

  if (response) {
    resolve();
    yield put(inviteFormClose());
  } else {
    reject(errors);
  }
}
