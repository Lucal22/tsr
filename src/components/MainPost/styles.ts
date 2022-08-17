import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { stylesContainer } from '../StyleFunctions/hover';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.secondary};
    border-radius: 5px;
    box-shadow: 0 0 1px black;
    padding: 20px 20px 10px 20px;
    color: ${theme.colors.primary};
  `}
`;

export const Category = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: ${theme.fonts.size.small};
  `}
`;

export const Title = styled.h2<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    ${stylesContainer[categorySlug](theme)}
  `}
`;
