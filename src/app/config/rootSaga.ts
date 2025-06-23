import { all, fork } from 'redux-saga/effects';
import { resultsSaga, storageResultsSaga } from '@root/entities/results/model/sagas';

export default function* rootSaga () {
  yield all([
    fork(resultsSaga),
    fork(storageResultsSaga),
  ]);
}
