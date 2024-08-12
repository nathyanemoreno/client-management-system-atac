import { FC } from "react";
import Crown from "../Icon/Crown";
import { Stack } from "../Stack";
import { Text } from "../Text";

export const Logo: FC = (props) => {
  return (
    <Stack alignItems="center" spacing={3} {...props}>
      <Crown width={40} height={40} />
      <Text variant="heading-lg">Planning Poker Royale</Text>
    </Stack>
  );
};
