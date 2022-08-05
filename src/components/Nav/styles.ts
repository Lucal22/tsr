import styled, { css, DefaultTheme } from 'styled-components';

type FlexProps = {
  text: string;
  position: string;
};

const linksStyle = {
  top: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.medium};
    color: ${theme.colors.slate};
  `,
  bottom: (theme: DefaultTheme) => css`
    margin-top: ${theme.spaces.xSmall};
    padding-top: ${theme.spaces.xSmall};
    font-size: ${theme.fonts.size.small};
    color: ${theme.colors.logo};
    a:hover {
      color: ${theme.colors.white};
    }
    @media (max-width: ${theme.screen.size.medium}) {
      margin-top: 0;
      padding-top: 0;
    }
  `,
};

export const Nav = styled.nav``;

export const Flex = styled.div<FlexProps>`
  ${({ theme, text, position }) => css`
    font-size: ${text === 'medium'
      ? theme.fonts.size.medium
      : theme.fonts.size.small};
    display: flex;
    align-items: center;
    gap: ${theme.spaces.large};
    ${position === 'top' ? linksStyle.top(theme) : linksStyle.bottom(theme)};
    &:nth-child(2) {
      border-top: 0.1rem solid ${theme.colors.slate500};
    }
    @media (max-width: ${theme.screen.size.medium}) {
      a {
        display: none;
      }
      &:nth-child(2) {
        border: none;
      }
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      gap: ${theme.spaces.medium};
    } ;
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    padding: 0 1rem;
    width: 40rem;
    height: 3rem;
    font-family: ${theme.fonts.style.defaultFont};
    font-size: ${theme.fonts.size.small};
    color: ${theme.colors.primary};
    border: 0.1rem solid ${theme.colors.slate500};
    border-radius: 1rem;
    background-color: ${theme.background.primary};
    @media (max-width: ${theme.screen.size.small}) {
      width: 30rem;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      width: 20rem;
    } ;
  `}
`;
