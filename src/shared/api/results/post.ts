import { GameResult, SuccessResponse } from '@root/shared/api/dto';
import { request } from '@root/shared/lib/apiUtils';

type PostResultsRequest = GameResult;

export const post = async (data: PostResultsRequest) => {
  const response = await request.post<SuccessResponse>({
    url: '/results',
    data,
  });

  return response.data;
};
