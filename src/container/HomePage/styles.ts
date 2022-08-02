import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.defaultFont};
    background-color: ${theme.background.dark};
  `}
`;
