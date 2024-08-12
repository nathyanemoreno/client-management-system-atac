import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createClient } from '~/domain/use-cases/create-client';
import { CreateClient } from '~/domain/use-cases/create-client/types';

export const useCreateClient = (): UseMutationResult<
    CreateClient.Response,
    unknown,
    CreateClient.Parameters
> => {
    const service = async (params: CreateClient.Parameters) => {
        try {
            const data = await createClient(params);

            return data;
        } catch (error) {
            throw error;
        }
    };

    return useMutation({
        mutationFn: service,
    });
};
