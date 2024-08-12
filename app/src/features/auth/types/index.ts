import { User } from "~/domain/types/User";

export type AuthSignInPayload = {
  user: User;
  authToken: string;
};

export interface AuthState {
  user: User | null;
  authToken: string | null;
  isSignedIn: boolean;
  isVerified: boolean;
}
