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
    font-family: ${theme.fonts.defaultFont};
    font-size: 1.6rem;
    line-height: 1.5;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}
`;
