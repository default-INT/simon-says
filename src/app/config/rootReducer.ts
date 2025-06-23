import { combineReducers } from 'redux';
import { resultsSlice } from '@root/entities/results/model';

const rootReducer = combineReducers({
  results: resultsSlice.reducer,
});

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

export default rootReducer;
