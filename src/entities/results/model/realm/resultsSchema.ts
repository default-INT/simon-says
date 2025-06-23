import { ObjectSchema } from 'realm';
import * as Yup from 'yup';
import { GameResult } from '@root/shared/api/dto';

export const resultsSchemaName = 'Results';

export const resultsSchema: ObjectSchema = {
  name: resultsSchemaName,
  properties: {
    name: { type: 'string' },
    date: { type: 'date' },
    score: { type: 'int' },
  },
};

export const resultsValidSchema = Yup.object<GameResult>().shape({
  name: Yup.string().required().min(1),
  date: Yup.string().required(),
  score: Yup.number().required(),
});
