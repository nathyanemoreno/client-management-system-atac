import { FC } from "react";
import Styled from "./styled";
import { TextProps } from "./types";

export const Text: FC<TextProps> = ({
  variant = "text-md",
  children,
  ...props
}) => {
  return (
    <Styled.Text $variant={variant} {...props}>
      {children}
    </Styled.Text>
  );
};
