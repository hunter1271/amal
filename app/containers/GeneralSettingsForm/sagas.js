import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';
import { REQUEST, success } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  const { response, error } = yield call(
    api.profile.updateGeneralSettings,
    values.firstName,
    values.middleName,
    values.lastName
  );

  if (response) {
    resolve();

    yield put(success());
  } else {
    reject(new SubmissionError(error.validation_errors));
  }
}
