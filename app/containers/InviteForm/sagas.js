import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { SubmissionError, destroy } from 'redux-form/immutable';
import { FORM_NAME } from 'components/InviteForm';
import { close, REQUEST, CLOSE } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
  yield takeLatest(CLOSE, closeSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  const { response, error } = yield call(api.admin.inviteUser, values.email);

  if (response) {
    resolve();

    yield put(close());
  } else {
    reject(new SubmissionError(error.validation_errors));
  }
}

export function* closeSaga() {
  yield put(destroy(FORM_NAME));
}
