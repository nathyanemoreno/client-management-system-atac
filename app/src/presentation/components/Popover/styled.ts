import styled from "styled-components";

const Container = styled.div(({ theme }) => ({
  position: "absolute",
  top: `${theme.spaces[6]}`,
  left: "0",
  backgroundColor: theme.colors.surface[200],
  boxShadow: `0 4px 8px ${theme.colors.shadow}`,
  padding: `${theme.spaces[4]}`,
  borderRadius: theme.spaces[1],
  zIndex: 1000,
}));

export default { Container };
