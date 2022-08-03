import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.lightBlue};
    background-color: ${theme.background.details};
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    gap: ${theme.spaces.large};
    display: flex;
    align-items: center;
    p {
      width: 100%;
      display: flex;
    }
  `}
`;

export const Logo = styled.a`
  max-width: 33.2rem;
`;

export const Flex = styled.div`
  ${({ theme }) => css`
    padding: 1rem 0;
    gap: ${theme.spaces.large};
    display: flex;
    align-items: center;
  `}
`;
