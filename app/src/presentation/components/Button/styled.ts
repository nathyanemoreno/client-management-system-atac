import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariant } from "./types";

export interface StyledState {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const sizes = {
  small: {
    fontSize: "0.8rem",
    padding: "8px 16px",
  },
  medium: {
    fontSize: "1rem",
    padding: "10px 20px",
  },
  large: {
    fontSize: "1.2rem",
    padding: "12px 24px",
  },
};

const variants = {
  contained: css`
    background-color: ${({ theme }) => theme.colors.primaryMain};
    color: #ffffff;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary[400]};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.primary[600]};
    }
  `,
  outlined: css`
    background-color: transparent;
    border: 2px solid #2196f3;
    color: #2196f3;
    &:hover {
      background-color: #e3f2fd;
    }
  `,
  text: css`
    background-color: transparent;
    color: #2196f3;
    &:hover {
      background-color: #e3f2fd;
    }
  `,
};

const Container = styled.button<StyledState>`
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}
`;

export default { Container };
