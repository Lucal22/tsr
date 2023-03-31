import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { Colors } from '../../styles/functions/color';
import { Hover } from '../../styles/functions/hover';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 33rem;
    min-height: 30rem;
    max-height: 40rem;
    padding: 2rem 1rem 1rem 1rem;
    margin-bottom: 1.5rem;
    border-radius: 1.5rem;
    background-color: ${theme.background.secondary};
    color: ${theme.colors.primary};
    @media (max-width: ${theme.screen.size.medium}) {
      max-width: 30rem;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      min-height: 24rem;
      max-height: 26rem;
    }
  `}
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
`;

export const Category = styled.p<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    ${Colors[categorySlug](theme)}
  `}
`;

export const Title = styled.h2<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    padding: 0.5rem 0;
    font-size: ${theme.fonts.size.heading};
    a {
      ${Hover[categorySlug](theme)}
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      font-size: ${theme.fonts.size.small};
    }
  `}
`;
