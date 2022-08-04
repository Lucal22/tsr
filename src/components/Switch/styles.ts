import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    background-color: transparent;
    border: none;
  `}
`;
