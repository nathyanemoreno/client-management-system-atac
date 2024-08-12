// ErrorMessage.tsx
import { FC } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #fddede;
  color: #d8000c;
  border: 1px solid #d8000c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const ErrorIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>❌</ErrorIcon>
      <div>{message}</div>
    </ErrorContainer>
  );
};

export default ErrorMessage;
