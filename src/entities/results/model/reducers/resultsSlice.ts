import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse, GameResult } from '@root/shared/api/dto';

export interface ResultsState {
  data: GameResult[]
  loading: boolean
  error: string | null
}

const initialState: ResultsState = {
  data: [],
  loading: false,
  error: null,
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    fetchDataRequest: state => {
      state.error = null;
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<GameResult[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state, action: PayloadAction<ErrorResponse>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    setResults: (state, action: PayloadAction<GameResult[]>) => {
      state.data = action.payload;
    },
    clearData: state => {
      state.loading = false;
      state.error = null;
      state.data = [];
    },
  },
});
