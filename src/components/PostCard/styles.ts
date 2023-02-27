import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { Colors } from '../../styles/functions/color';
import { PostHover } from '../../styles/functions/postHover';

export const Container = styled.article<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    position: relative;
    display: flex;
    color: ${theme.colors.primary};
    background-color: ${theme.background.secondary};
    height: 14rem;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
    ${PostHover[categorySlug](theme)}
    @media (min-width: ${theme.screen.size.small}) {
      border-radius: 1.5rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      height: 19.7rem;
      border-radius: 0 1.5rem 0 0;
    }
  `}
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    padding-left: 1rem;
    display: flex;
    align-items: center;
    @media (min-width: ${theme.screen.size.large}) {
      width: 35rem;
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 19.7rem;
    padding: 1rem;

    @media (min-width: ${theme.screen.size.medium}) {
      width: width: 55rem;
    }
  `}
`;

export const Category = styled.p<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    ${Colors[categorySlug](theme)}
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    font-size: ${theme.fonts.size.small};

    @media (min-width: ${theme.screen.size.small}) {
      font-size: ${theme.fonts.size.heading};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.xSmall};
      color: ${theme.colors.slate500};
      padding-bottom: 0.5rem;
    }
  `}
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
`;
