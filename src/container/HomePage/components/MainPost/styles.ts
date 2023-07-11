import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../../../Types/style';
import { Colors } from '../../../../styles/functions/color';
import { Hover } from '../../../../styles/functions/hover';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    min-height: 30rem;
    background-color: ${theme.background.secondary};
    border-radius: 0.5rem;
    padding: 2rem 2rem 1rem 2rem;
    color: ${theme.colors.primary};
    @media (min-width: ${theme.screen.size.medium}) {
      min-height: 35rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      min-height: 45rem;
    }
  `}
`;

export const Category = styled.span<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    color: ${theme.colors.purple};
    font-size: ${theme.fonts.size.small};
    ${Colors[categorySlug](theme)}
  `}
`;

export const Title = styled.h1<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    font-size: ${theme.fonts.size.heading};
    a {
      ${Hover[categorySlug](theme)}
    }
    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.medium};
    }
  `}
`;
