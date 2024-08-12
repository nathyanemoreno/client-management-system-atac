import { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { SignInParams } from '~/domain/use-cases/auth/doSignIn';
import { SignUpParams } from '~/domain/use-cases/auth/doSignUp';
import { Button } from '~/presentation/components/Button';
import { Input } from '~/presentation/components/Input';
import { Text } from '~/presentation/components/Text';
import { theme } from '~/theme';
import Styled from './styled';

export interface AuthModalProps {
  isLoggingIn: boolean;
  onSignUp(data: SignUpParams): void;
  onSignIn(data: SignInParams): void;
  onToggleMode(): void;
}

export const AuthModal: FC<AuthModalProps> = ({
  isLoggingIn,
  onSignUp,
  onSignIn,
  onToggleMode,
}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleConfirm = useCallback(() => {
    if (isLoggingIn) {
      onSignIn({
        email: user.email,
        password: user.password,
      });
    } else if (isLoggingIn) {
      onSignUp({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  }, [isLoggingIn, onSignUp, onSignIn, user]);

  const handleChangeName = useCallback(
    (text: string) => {
      setUser({ ...user, name: text });
    },
    [user],
  );

  const handleChangeEmail = useCallback(
    (text: string) => {
      setUser({ ...user, email: text });
    },
    [user],
  );

  const handleChangePassword = useCallback(
    (text: string) => {
      setUser({ ...user, password: text });
    },
    [user],
  );

  const toggleMode = useCallback(() => {
    // This function will toggle the mode between 'sign-in' and 'sign-up'
    onToggleMode();
    setUser({
      name: '',
      email: '',
      password: '',
    });
  }, []);

  return ReactDOM.createPortal(
    <Styled.ModalOverlay>
      <Styled.Modal>
        <Text
          as='h2'
          variant='heading-sm'
          style={{ marginBottom: theme.spaces[6] }}
        >
          {isLoggingIn ? 'Entrar' : 'Criar usuário'}
        </Text>

        {!isLoggingIn && (
          <Input
            value={user.name}
            label='Nome'
            onChangeText={handleChangeName}
          />
        )}

        <Input
          value={user.email}
          label='Email'
          onChangeText={handleChangeEmail}
        />
        <Input
          value={user.password}
          label='Senha'
          type='password'
          onChangeText={handleChangePassword}
        />

        <Button style={{ marginTop: theme.spaces[4] }} onClick={handleConfirm}>
          {isLoggingIn ? 'Entrar' : 'Criar usuário'}
        </Button>

        <Button
          style={{
            marginTop: theme.spaces[4],
            backgroundColor: theme.colors.primaryMain,
          }}
          onClick={toggleMode}
        >
          {isLoggingIn
            ? 'Não tem uma conta? Criar'
            : 'Já tem uma conta? Entrar'}
        </Button>
      </Styled.Modal>
    </Styled.ModalOverlay>,
    document.getElementById('modal-root')!,
  );
};
