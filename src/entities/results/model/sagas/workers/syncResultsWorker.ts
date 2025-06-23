import { resultsColl } from '@root/entities/results/model';
import { call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { GameResult } from '@root/shared/api/dto';
import { Alert } from 'react-native';

export function* syncResultsWorker (action: PayloadAction<GameResult[]>) {
  try {
    yield call(resultsColl.syncResults, action.payload);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    const e = err as Error;
    Alert.alert('Error', e.message);
  }
}
