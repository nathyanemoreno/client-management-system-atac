import { User } from "~/domain/types/User";
import { api } from "~/infra/api";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  user: User;
  authToken: string;
}

const doSignUp = async (params: SignUpParams): Promise<SignUpResponse> => {
  const { data } = await api.post<SignUpResponse>("/auth/sign-up", {
    name: params.name,
    email: params.email,
    password: params.password,
  });

  const { user, authToken } = data;

  return { user, authToken };
};

export { doSignUp };
