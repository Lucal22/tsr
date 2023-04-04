import styled, { css } from 'styled-components';

type MorePostsStyleProps = {
  morePosts: number;
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.slate500};
    padding: 1.5rem;
    margin-bottom: 3rem;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    height: 0.1rem;
    width: 100%;
    border: 0.1rem solid ${theme.colors.slate500};
  `}
`;

export const Button = styled.button<MorePostsStyleProps>`
  ${({ theme, morePosts }) => css`
    cursor: ${morePosts < 20 ? 'pointer' : 'default'};
    text-align: center;
    background-color: transparent;
    border: none;
    p {
      width: 24rem;
      font-size: ${theme.fonts.size.heading};
      color: ${theme.colors.slate500};
      @media (max-width: ${theme.screen.size.small}) {
        width: 17.6rem;
        font-size: ${theme.fonts.size.xSmall};
      }
      a {
        color: ${theme.colors.blue};
      }
    }
  `}
`;
