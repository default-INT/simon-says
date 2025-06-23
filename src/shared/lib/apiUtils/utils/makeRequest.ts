import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { env } from '@root/shared/config/env.ts';

type Middleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

export const makeRequest = (middlewares: Middleware[]) => {
  const instance = axios.create({
    baseURL: env.API_URL,
  });

  return <TResponse>(config: AxiosRequestConfig = {}): AxiosPromise<TResponse> => {
    const params: AxiosRequestConfig = middlewares.reduce(
      (acc, middlewareFn) => middlewareFn(acc),
      config,
    );

    return instance.request(params);
  };
};
