interface AuthSignInWithTokenBody {
  authToken: string;
}

interface AuthSignInBody {
  email: string;
  password: string;
}

interface AuthSignUpBody {
  name: string;
  email: string;
  password: string;
}

export { AuthSignInBody, AuthSignUpBody, AuthSignInWithTokenBody };
