import { createSelector } from '@reduxjs/toolkit';
import { SortOrder } from '@root/shared/config/list';
import { GameResult } from '@root/shared/api/dto';

type GetOrderFn = (order: SortOrder) => (a: GameResult, b: GameResult) => number;

const selectResults = (state: RootState) => state.results.data;

const sortFnByKeyMap: Record<keyof GameResult, GetOrderFn > = {
  name: order => (a, b) => order === SortOrder.Asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  score: order => (a, b) => order === SortOrder.Asc ? a.score - b.score : b.score - a.score,
  date: order => (a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (order === SortOrder.Asc) return dateA - dateB;

    return  dateB - dateA;
  },
};

export const selectSortedResults = createSelector(
  [selectResults, (_, sortKey: keyof GameResult, sortOrder: SortOrder) => ({ sortKey, sortOrder })],
  (resultList, { sortKey, sortOrder }) => {
    const sortingFn = sortFnByKeyMap[sortKey](sortOrder);

    return [...resultList].sort(sortingFn);
  },
);
