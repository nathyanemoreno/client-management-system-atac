import {
  FC,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~/application/store';
import { StorageKeys } from '~/domain/constants/storageKeys';
import { signIn, signOut } from '~/features/auth/authSlice';
import { api } from '~/infra/api';
import { Spinner } from '~/presentation/components/Spinner';
import { Text } from '~/presentation/components/Text';
import { AuthModal } from '~/presentation/modals/AuthModal';
import { doSignUp, SignUpParams } from '~/domain/use-cases/auth/doSignUp';
import { signInWithToken } from '~/domain/use-cases/auth/signInWithToken';
import Styled from './styled';
import { doSignIn } from '~/domain/use-cases/auth/doSignIn';

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggingInMode, setIsLoggingInMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAuthVerified = useAppSelector((state) => state.auth.isVerified);
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    async function loadAsync() {
      try {
        const localToken = localStorage.getItem(StorageKeys.AuthToken);

        if (!localToken) {
          dispatch(signOut());
          return;
        }

        const { user, authToken } = await signInWithToken({
          token: localToken,
        });

        api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

        localStorage.setItem(StorageKeys.AuthToken, authToken);

        dispatch(
          signIn({
            user,
            authToken,
          }),
        );
      } catch (error) {
        console.log({ error });
        localStorage.removeItem(StorageKeys.AuthToken);
        dispatch(signOut());
      }
    }

    loadAsync();
  }, [dispatch]);

  useEffect(() => {
    if (isAuthVerified && !isSignedIn) {
      setIsModalOpen(true);
    }
  }, [isAuthVerified, isSignedIn]);

  const handleSignUp = useCallback(
    async (data: SignUpParams) => {
      const { user, authToken } = await doSignUp({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      console.log(data);

      setIsModalOpen(false);

      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

      localStorage.setItem(StorageKeys.AuthToken, authToken);

      dispatch(
        signIn({
          user,
          authToken,
        }),
      );
    },
    [dispatch],
  );

  const handleSignIn = useCallback(
    async (data: SignUpParams) => {
      const { user, authToken } = await doSignIn({
        email: data.email,
        password: data.password,
      });

      console.log(data);

      setIsModalOpen(false);

      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

      localStorage.setItem(StorageKeys.AuthToken, authToken);

      dispatch(
        signIn({
          user,
          authToken,
        }),
      );
    },
    [dispatch],
  );

  const handleMode = useCallback(() => {
    setIsLoggingInMode((old) => !old);
  }, []);

  if (!isAuthVerified)
    return (
      <Styled.LoadingWrapper>
        <Spinner />
        <Text>Carregando</Text>
      </Styled.LoadingWrapper>
    );

  return (
    <Fragment>
      {children}
      {isModalOpen && (
        <AuthModal
          onSignIn={handleSignIn}
          onSignUp={handleSignUp}
          onToggleMode={handleMode}
          isLoggingIn={isLoggingInMode}
        />
      )}
    </Fragment>
  );
};
