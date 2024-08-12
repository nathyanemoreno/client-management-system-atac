import { FC, useState } from 'react';
import Styled from './styled';
import { AddClientModalProps } from './types';
import { Button } from '~/presentation/components/Button';

export const AddClientModal: FC<AddClientModalProps> = ({
    onCreate,
    onClose,
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        // TODO: Implement client creation logic
        console.log('Adding client:', { name, email, phone });
        onCreate({ name, email, phone });
    };

    return (
        <Styled.ModalOverlay>
            <Styled.Modal>
                <Styled.Title>Adicionar cliente</Styled.Title>
                <Styled.Input
                    value={name}
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <Styled.Input
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Styled.Input
                    value={phone}
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Styled.ButtonContainer>
                    <Button onClick={handleSubmit}>Criar</Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </Styled.ButtonContainer>
            </Styled.Modal>
        </Styled.ModalOverlay>
    );
};
