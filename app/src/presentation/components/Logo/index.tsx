import { FC } from "react";
import Crown from "../Icon/Crown";
import { Stack } from "../Stack";
import { Text } from "../Text";

export const Logo: FC = (props) => {
  return (
    <Stack alignItems="center" spacing={3} {...props}>
      <Crown width={32} height={32} />
      <Text variant="heading-md">Client Management System</Text>
    </Stack>
  );
};
