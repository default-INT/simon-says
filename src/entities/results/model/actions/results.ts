import { GameResult } from '@root/shared/api/dto';
import { createAction } from '@reduxjs/toolkit';
import { resultsSlice } from '@root/entities/results/model';

export const loadLocalResults = createAction('loadLocalResults');
export const writeLocalResults = createAction<GameResult[]>('writeLocalResults');

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  clearData,
  setResults,
} = resultsSlice.actions;
