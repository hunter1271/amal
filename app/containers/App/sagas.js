import { fork } from 'redux-saga/effects';
import authSaga from 'containers/Auth/sagas';

export default function* mainSaga() {
  yield fork(authSaga);
}
