import { FC } from "react";
import Styled from "./styled";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  size = "medium",
  variant = "contained",
  children,
  ...rest
}) => {
  return (
    <Styled.Container type="button" $size={size} $variant={variant} {...rest}>
      {children}
    </Styled.Container>
  );
};
