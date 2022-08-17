import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { stylesContainer } from '../StyleFunctions/hover';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 30rem 1fr;
    color: ${theme.colors.primary};
    background-color: ${theme.background.secondary};
    height: 16.9rem;
    margin-bottom: 2rem;
  `}
`;

export const Thumbnail = styled.div`
  width: 100%;
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 16.9rem;
    padding: 1rem;
    border: 1px solid ${theme.colors.primary};
  `}
`;

export const Heading = styled.h2<PostStyleProps>`
  ${({ theme, categorySlug }) => css`
    font-size: ${theme.fonts.size.heading};
    ${stylesContainer[categorySlug](theme)}
  `}
`;
