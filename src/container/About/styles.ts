import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.style.defaultFont};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Post = styled.article`
  ${({ theme }) => css`
    border-radius: 1.5rem;
    padding: 1rem;
    margin-bottom: 3rem;
    background-color: ${theme.background.secondary};
    h1 {
      margin-bottom: 2rem;
    }
    h1,
    h2 {
      color: ${theme.colors.logo};
    }

    @media (min-width: ${theme.screen.size.medium}) {
      h1 {
        font-size: ${theme.fonts.size.large};
      }
    }

    @media (min-width: ${theme.screen.size.large}) {
      padding: 5rem;
      margin-bottom: 0;
    }
  `}
`;

export const Description = styled.div`
  margin-bottom: 3rem;

  p {
  }
`;
