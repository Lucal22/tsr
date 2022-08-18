import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { Colors } from '../StyleFunctions/color';
import { PostHover } from '../StyleFunctions/postHover';

export const Container = styled.div<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 35rem 1fr;
    color: ${theme.colors.primary};
    background-color: ${theme.background.secondary};
    height: 19.7rem;
    margin-bottom: 2rem;
    border-radius: 0 1.5rem 0 0;
    ${PostHover[categorySlug](theme)}
  `}
`;

export const Thumbnail = styled.div`
  width: 100%;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 19.7rem;
  padding: 1rem;
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
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.slate500};
    padding-bottom: 0.5rem;
  `}
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
`;
