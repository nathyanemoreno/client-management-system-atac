// LoadingComponent.js
import { FC } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the loading animation
const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled component for the loading spinner
const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${({ theme }) => theme.colors.primaryMain};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;

// Container component for centering the loading spinner
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner: FC = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};
