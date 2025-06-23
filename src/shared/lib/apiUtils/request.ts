import { makeRequest } from '@root/shared/lib/apiUtils/utils/makeRequest.ts';
import { addApiKey, addGetMethod, addPostMethod } from '@root/shared/lib/apiUtils/middleware';

export const request = {
  get: makeRequest([addGetMethod, addApiKey]),
  post: makeRequest([addPostMethod, addApiKey]),
};
