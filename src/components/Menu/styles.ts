import styled, { css } from 'styled-components';

type MenuProps = {
  open: boolean;
};

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    top: 25%;
    display: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.white};

    svg {
      width: 4rem;
      height: 3.4rem;
    }

    @media (max-width: ${theme.screen.size.medium}) {
      display: block;
    }
  `}
`;

export const Menu = styled.div<MenuProps>`
  ${({ theme, open }) => css`
    display: ${open ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 100%;
    width: 200px;
    padding: 1rem;
    height: 600px;
    background-color: ${theme.background.secondary};

    @media (min-width: ${theme.screen.size.medium}) {
      display: none;
    }
  `}
`;

export const Logo = styled.a`
  max-width: 30rem;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.menu};
    a:hover {
      color: ${theme.colors.logo};
    }
  `}
`;

export const MenuItens = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.menu};
    padding: 1rem;
  `}
`;
