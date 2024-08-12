import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.surface[200],
  borderRadius: theme.spaces[2],
  padding: `${theme.spaces[4]}`,
  width: '400px',
  boxShadow: `0 4px 8px ${theme.colors.shadow}`,
}));

const Title = styled.h2(({ theme }) => ({
  marginBottom: theme.spaces[4],
}));

const Input = styled.input(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: `${theme.spaces[2]}`,
  marginBottom: theme.spaces[2],
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.spaces[1],
}));

const ButtonContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spaces[4],
  gap: theme.spaces[6],
}));

export default {
  ModalOverlay,
  Modal,
  Title,
  Input,
  ButtonContainer,
};
