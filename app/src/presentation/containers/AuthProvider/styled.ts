import styled from "styled-components";
import { theme } from "~/theme";

const LoadingWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: theme.spaces[4],
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
});

export default { LoadingWrapper };
