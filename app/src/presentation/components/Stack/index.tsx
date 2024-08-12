import { FC } from "react";
import Styled from "./styled";
import { StackProps } from "./types";

export const Stack: FC<StackProps> = ({
  alignItems,
  justifyContent,
  spacing = 0,
  children,
  ...props
}) => {
  return (
    <Styled.Container
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $spacing={spacing}
      {...props}
    >
      {children}
    </Styled.Container>
  );
};
