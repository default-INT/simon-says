import { request } from '@root/shared/lib/apiUtils';
import { HealthResponse } from '@root/shared/api/dto';

export const get = async () => {
  const response = await request.get<HealthResponse>({
    url: '/health',
  });

  return response.data;
};
