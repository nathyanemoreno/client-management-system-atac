interface AuthSignInBody {
  authToken: string;
}

interface AuthSignUpBody {
  name: string;
  email: string;
  password: string;
}

export { AuthSignInBody, AuthSignUpBody };
