import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.background.details};
    width: 100%;
    position: fixed;
    z-index: 99;
  `}
`;

export const Logo = styled.a`
  max-width: 33.2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Flex = styled.div`
  ${({ theme }) => css`
    padding: 1rem 0;
    gap: ${theme.spaces.large};
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
      justify-content: center;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      padding-left: 30px;
    } ;
  `}
`;
