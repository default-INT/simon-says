import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { resultsColl, resultsValidSchema, setResults } from '@root/entities/results/model';
import { GameResult } from '@root/shared/api/dto';

export function * loadLocalResultsWorker () {
  try {
    const resultList: GameResult[] = yield call(resultsColl.getList);

    const castedResults = resultList.map<GameResult>(item => resultsValidSchema
      .cast(item, { stripUnknown: true }));

    yield put(setResults(castedResults));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    const e = err as Error;
    Alert.alert('Error', e.message);
  }
}
