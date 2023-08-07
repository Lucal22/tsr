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

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Attribute = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.secondary};
    border-bottom: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.details};
    margin-bottom: 5rem;
    padding: 1rem 0;
    h1 {
      color: ${theme.colors.logo};
    }
  `}
`;

export const Skeleton = styled.div`
  ${({ theme }) => css`
    padding: 2rem 1.5rem;
    @media (min-width: ${theme.screen.size.large}) {
      padding: 0;
    }
  `}
`;
