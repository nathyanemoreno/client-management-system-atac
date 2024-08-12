import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --colors-surface-100: ${({ theme }) =>
      theme.colors.lightTheme.surface[100]};
    --colors-surface-200: ${({ theme }) =>
      theme.colors.lightTheme.surface[200]};
    --colors-surface-300: ${({ theme }) =>
      theme.colors.lightTheme.surface[300]};
    --colors-surface-400: ${({ theme }) =>
      theme.colors.lightTheme.surface[400]};
    --colors-text: #212135;

    color: var(--colors-text);
    background-color: ${({ theme }) => theme.colors.surface[100]};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --colors-surface-100: ${({ theme }) =>
        theme.colors.darkTheme.surface[100]};
      --colors-surface-200: ${({ theme }) =>
        theme.colors.darkTheme.surface[200]};
      --colors-surface-300: ${({ theme }) =>
        theme.colors.darkTheme.surface[300]};
      --colors-surface-400: ${({ theme }) =>
        theme.colors.darkTheme.surface[400]};
      --colors-text: rgba(255, 255, 255, 0.87);
    }
  }
`;

export { GlobalStyle };
