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
      margin-bottom: 0;
    }
    margin-bottom: 3rem;
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

export const TagSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PostTag = styled.span`
  ${({ theme }) => css`
    a {
      display: block;
      min-width: 7.5rem;
      padding: 0 0.5rem;
      text-align: center;
      border: 1px solid ${theme.colors.logo};
      border-radius: 0.5rem;
      font-size: ${theme.fonts.size.xSmall};
      background-color: ${theme.background.primary};
      color: ${theme.colors.logo};
    }
  `}
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
  ul {
    list-style-position: inside;
  }
`;
