import { api } from '~/infra/api';
import { CreateClient } from './types';

export const createClient = async (
    params: CreateClient.Parameters,
): Promise<CreateClient.Response> => {
    const data = await api.post('/sign-up', {
        name: params.name,
        phone: params.phone,
        email: params.email,
        address: {
            latitude: params.address.latitude,
            longitude: params.address.longitude,
        },
    });

    return data.data;
};
