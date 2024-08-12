import { api } from '~/infra/api';
import { CreateClient } from './types';

export const createClient = async (
  params: CreateClient.Parameters,
): Promise<CreateClient.Response> => {
  const data = await api.post('/client', {
    name: params.name,
    phone: params.phone,
    email: params.email,
    coordinate_x: params.coordinate_x,
    coordinate_y: params.coordinate_y,
  });

  return data.data;
};
