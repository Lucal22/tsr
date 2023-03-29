import styled, { css } from 'styled-components';
import { Colors } from '../../styles/functions/color';
import { PostStyleProps } from '../../Types/style';

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
    background-color: ${theme.background.secondary};
    @media (min-width: ${theme.screen.size.large}) {
      padding: 5rem;
    }
  `}
`;

export const Title = styled.h1<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    ${Colors[categorySlug](theme)}
    @media(min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.large};
    }
  `}
`;

export const PostHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const PostImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const PostContent = styled.div`
  figure {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
