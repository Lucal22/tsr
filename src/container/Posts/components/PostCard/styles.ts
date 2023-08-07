import styled, { css } from 'styled-components';
import { PostStyleProps, PostStyleSkeleton } from '../../../../Types/style';
import { Colors } from '../../../../styles/functions/color';
import { PostHover } from '../../../../styles/functions/postHover';

export const Container = styled.article<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    width: 100%;
    position: relative;
    display: flex;
    color: ${theme.colors.primary};
    background-color: ${theme.background.secondary};
    height: 19.7rem;
    margin-bottom: 2rem;
    border-radius: 0 1.5rem 0 0;
    ${PostHover[categorySlug](theme)}
    @media (max-width: ${theme.screen.size.medium}) {
      border-radius: 1.5rem;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      height: 14rem;
      border-radius: 1.5rem;
    }
  `}
`;

export const Thumbnail = styled.div<PostStyleSkeleton>`
  ${({ theme, skeleton }) => css`
    ${skeleton
      ? `
  background-color: ${theme.background.primary};
  margin: 1rem;`
      : null}
    max-width: 35rem;
    @media (max-width: ${theme.screen.size.medium}) {
      padding-left: 1rem;
      display: flex;
      align-items: center;
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 14rem;
    padding: 1rem;
    @media (min-width: ${theme.screen.size.medium}) {
      max-width: 55rem;
      height: 19.7rem;
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
    font-size: ${theme.fonts.size.heading};
    @media (max-width: ${theme.screen.size.xSmall}) {
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.slate500};
    padding-bottom: 0.5rem;
    @media (max-width: ${theme.screen.size.small}) {
      display: none;
    }
  `}
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
`;
