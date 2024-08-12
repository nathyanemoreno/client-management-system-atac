import styled from "styled-components";

export interface StyledState {
  $spacing: number;
  $alignItems?: "center" | "flex-start" | "flex-end";
  $justifyContent?: "center" | "space-between";
}

const Container = styled("div")<StyledState>(
  ({ theme, $alignItems, $justifyContent, $spacing }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spaces[$spacing],
    alignItems: $alignItems,
    justifyContent: $justifyContent,
  })
);

export default { Container };
