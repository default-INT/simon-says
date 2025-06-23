import { all } from 'redux-saga/effects';
import { resultsSaga } from './resultsSaga';
import { storageResultsSaga } from './storageResultsSaga';

export function* rootSaga () {
  yield all([resultsSaga, storageResultsSaga]);
}
