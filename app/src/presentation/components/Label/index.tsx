import { FC } from "react";
import { theme } from "~/theme";
import { Text } from "../Text";
import { LabelProps } from "./types";

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Text
      as="label"
      variant="text-md"
      style={{ display: "block", marginBottom: theme.spaces[2] }}
      {...props}
    >
      {children}
    </Text>
  );
};
