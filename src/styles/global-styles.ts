import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    width: 100%;
    min-height: 100vh;
    font-family: ${theme.fonts.style.defaultFont};
    background-color: ${theme.background.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}
`;
