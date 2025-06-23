import { request } from '@root/shared/lib/apiUtils';
import { GameResult } from '@root/shared/api/dto';

export const get = async () => {
  const response = await request.get<GameResult[]>({
    url: '/results',
  });

  return response.data;
};
