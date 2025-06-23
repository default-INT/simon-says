import Realm from 'realm';
import { GameResult } from '@root/shared/api/dto';
import { realm, resultsSchemaName } from './store';

export const resultsColl = {
  syncResults: (resultList: GameResult[]) => {
    const localResults = realm.objects<GameResult>(resultsSchemaName);

    realm.write(() => {
      realm.delete(localResults);

      resultList.forEach(result => {
        realm.create(resultsSchemaName, result);
      }, Realm.UpdateMode.Modified);
    });
  },
  getList: () => realm.objects<GameResult>(resultsSchemaName).sorted('date'),
};
