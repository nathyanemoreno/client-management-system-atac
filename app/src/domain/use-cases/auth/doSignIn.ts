import { User } from '~/domain/types/User';
import { api } from '~/infra/api';

interface SignInWithPromiseResponse {
    user: User;
    authToken: string;
}

export interface SignInParams {
    email: string;
    password: string;
}

const doSignIn = async ({
    email,
    password,
}: SignInParams): Promise<SignInWithPromiseResponse> => {
    const { data } = await api.post('/auth/sign-in', {
        email: email,
        password: password,
    });

    const { user, authToken } = data;

    return { user, authToken };
};

export { doSignIn };
