import { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '~/presentation/components/Button';
import { Input } from '~/presentation/components/Input';
import { Text } from '~/presentation/components/Text';
import { theme } from '~/theme';
import { SignUpParams } from '~/domain/use-cases/auth/doSignUp';
import { SignInParams } from '~/domain/use-cases/auth/doSignIn';
import Styled from './styled';

export interface AuthModalProps {
    mode: 'sign-in' | 'sign-up';
    onSignUp(data: SignUpParams): void;
    onSignIn(data: SignInParams): void;
}

export const AuthModal: FC<AuthModalProps> = ({ mode, onSignUp, onSignIn }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleConfirm = useCallback(() => {
        if (mode === 'sign-up') {
            onSignUp({
                name: user.name,
                email: user.email,
                password: user.password,
            });
        } else if (mode === 'sign-in') {
            onSignIn({
                email: user.email,
                password: user.password,
            });
        }
    }, [mode, onSignUp, onSignIn, user]);

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

    return ReactDOM.createPortal(
        <Styled.ModalOverlay>
            <Styled.Modal>
                <Text
                    as="h2"
                    variant="heading-sm"
                    style={{ marginBottom: theme.spaces[6] }}
                >
                    {mode === 'sign-up' ? 'Criar usuário' : 'Entrar'}
                </Text>

                {mode === 'sign-up' && (
                    <Input
                        value={user.name}
                        label="Nome"
                        onChangeText={handleChangeName}
                    />
                )}

                <Input
                    value={user.email}
                    label="Email"
                    onChangeText={handleChangeEmail}
                />
                <Input
                    value={user.password}
                    label="Senha"
                    type="password"
                    onChangeText={handleChangePassword}
                />

                <Button
                    style={{ marginTop: theme.spaces[4] }}
                    onClick={handleConfirm}
                >
                    {mode === 'sign-up' ? 'Criar usuário' : 'Entrar'}
                </Button>
            </Styled.Modal>
        </Styled.ModalOverlay>,
        document.getElementById('modal-root')!,
    );
};
