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

export const Flex = styled.div`
  ${({ theme }) => css`
    padding: 0 15px;
    display: flex;
    gap: 3rem;
    margin-bottom: 5rem;
    @media (max-width: ${theme.screen.size.small}) {
      display: block;
      article {
        margin-bottom: 3rem;
      }
    }
  `}
`;

export const MorePostsTop = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (max-width: ${theme.screen.size.medium}) {
      display: block;
    }
  `}
`;

export const MorePostsBot = styled.div`
  ${({ theme }) => css`
    display: block;
    @media (max-width: ${theme.screen.size.medium}) {
      display: none;
    }
  `}
`;
