import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.lightBlue};
    background-color: ${theme.background.details};
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css``}
`;
