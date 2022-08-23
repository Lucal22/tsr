import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { Colors } from '../../styles/functions/color';
import { Hover } from '../../styles/functions/hover';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.secondary};
    border-radius: 5px;
    padding: 20px 20px 10px 20px;
    color: ${theme.colors.primary};
  `}
`;

export const Category = styled.span<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    color: ${theme.colors.purple};
    font-size: ${theme.fonts.size.small};
    ${Colors[categorySlug](theme)}
  `}
`;

export const Title = styled.h2<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    a {
      ${Hover[categorySlug](theme)}
    }
  `}
`;
