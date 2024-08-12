// FloatingInputLabel.js

import styled from "styled-components";

export const FloatingInputLabel = styled.label`
  display: block;
  position: relative;
  margin-bottom: 4px;
  font-size: 16px;
`;

export const FloatingInputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  color: var(--colors-text);
  background-color: ${({ theme }) => theme.colors.surface[100]};

  &:focus {
    border-color: #1976d2; /* Add your preferred focus color */
  }
`;

export const FloatingInputWrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  padding-top: 10px; /* Adjust as needed */
  position: relative;
`;
