import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {} from 'containers/Authentication';
import { signInSuccess, signInFail, SIGN_IN_REQUEST } from './ducks';

export default function* () {
  yield takeLatest(SIGN_IN_REQUEST, requestSaga);
}

export function* requestSaga({ payload: { values, resolve, reject } }) {
  const api = yield getContext('api');

  // try {
  //   const { token, user } = yield call(
  //     api.auth.token,
  //     values.email,
  //     values.password
  //   );
  // } catch (error) {
  //   console.log(error);
  // }

  const { response } = yield call(
    api.auth.token,
    values.email,
    values.password
  );

  if (response) {
    yield put(signInSuccess(response));
    resolve('Sign in success');
    yield put(push('/'));
  } else {
    yield put(signInFail('Authentication error'));
    reject('Sign in failed');
  }
}
