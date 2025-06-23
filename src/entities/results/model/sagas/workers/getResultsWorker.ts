import { put, call } from 'redux-saga/effects';
import { ErrorResponse, GameResult } from '@root/shared/api/dto';
import { api } from '@root/shared/api';
import {
  fetchDataFailure,
  fetchDataSuccess,
  writeLocalResults,
} from '@root/entities/results/model';

export function* getResultsWorker () {
  try {
    const response: GameResult[] = yield call(api.results.get);

    yield put(fetchDataSuccess(response));
    yield put(writeLocalResults(response));
  } catch (e) {
    yield put(fetchDataFailure(e as ErrorResponse));
  }
}
