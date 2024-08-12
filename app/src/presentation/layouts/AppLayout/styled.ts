import styled from "styled-components";

const HEADER_HEIGHT = "96px";

const PageWrapper = styled.div(() => ({
  display: "block",
}));

const PageHeader = styled.header(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  height: HEADER_HEIGHT,

  display: "flex",
  alignItems: "center",
  padding: `${theme.spaces[4]} ${theme.spaces[6]}`,
}));

const PageContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100vw",
  height: "100vh",
  padding: theme.spaces[8],
  paddingTop: HEADER_HEIGHT,
}));

export default { PageWrapper, PageHeader, PageContainer };
