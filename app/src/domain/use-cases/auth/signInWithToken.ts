import { User } from '~/domain/types/User';
import { api } from '~/infra/api';

interface SignInWithPromiseResponse {
    user: User;
    authToken: string;
}

export interface SignInWithTokenParams {
    token: string;
}

const signInWithToken = async ({
    token,
}: SignInWithTokenParams): Promise<SignInWithPromiseResponse> => {
    const { data } = await api.post('/auth/token', {
        authToken: token,
    });

    const { user, authToken } = data;

    return { user, authToken };
};

export { signInWithToken };
