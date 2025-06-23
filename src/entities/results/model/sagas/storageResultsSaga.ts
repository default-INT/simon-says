import { all, takeLatest } from 'redux-saga/effects';
import { loadLocalResults, writeLocalResults } from '@root/entities/results/model';
import { syncResultsWorker,loadLocalResultsWorker } from './workers';

export function* storageResultsSaga () {
  yield all([
    takeLatest(writeLocalResults.type, syncResultsWorker),
    takeLatest(loadLocalResults.type, loadLocalResultsWorker),
  ]);
}
