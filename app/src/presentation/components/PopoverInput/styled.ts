import styled from "styled-components";

const Input = styled.input(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: `${theme.spaces[2]}`,
  marginBottom: `${theme.spaces[2]}`,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.spaces[1],
}));

export default { Input };
