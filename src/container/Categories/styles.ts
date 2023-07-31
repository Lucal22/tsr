import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.primary};
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

export const Skeleton = styled.div`
  ${({ theme }) => css`
    padding: 2rem 1.5rem;
    @media (min-width: ${theme.screen.size.large}) {
      padding: 0;
    }
  `}
`;