// FloatingInputLabel.js

import styled from "styled-components";

const Container = styled.div(({ theme }) => ({
  padding: `${theme.spaces[10]} ${theme.spaces[12]}`,
  borderRadius: theme.spaces[8],
  backgroundColor: theme.colors.surface[200],
}));

export default { Container };
