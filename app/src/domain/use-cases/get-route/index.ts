import { api } from '~/infra/api';
import { GetRoute } from './types';

export const getRoute = async (): Promise<GetRoute.Response> => {
  const data = await api.get('/clients/route');

  return data.data;
};
