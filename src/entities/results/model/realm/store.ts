import Realm from 'realm';
import { resultsSchema } from './resultsSchema';
export * from './resultsSchema';

export const realm = new Realm({
  schema: [resultsSchema],
  schemaVersion: 1,
});
