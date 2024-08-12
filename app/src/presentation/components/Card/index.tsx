import { FC } from "react";
import Styled from "./styled";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <Styled.Container {...props}>{children}</Styled.Container>;
};
