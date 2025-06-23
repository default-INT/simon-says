import { all, takeLatest } from 'redux-saga/effects';
import { fetchDataRequest } from '@root/entities/results/model';
import { getResultsWorker } from './workers';

export function *resultsSaga () {
  yield all([
    takeLatest(fetchDataRequest.type, getResultsWorker),
  ]);
}
