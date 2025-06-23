import { AxiosRequestConfig } from 'axios';
import { env } from '@root/shared/config/env.ts';

export const addApiKey = (config: AxiosRequestConfig): AxiosRequestConfig => ({
  ...config,
  headers: {
    ...config.headers,
    'x-api-key': env.API_KEY,
  },
});
