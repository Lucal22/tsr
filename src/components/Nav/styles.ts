import styled, { css, DefaultTheme } from 'styled-components';

type FlexProps = {
  text: string;
  position: string;
};

const linksStyle = {
  top: (theme: DefaultTheme) => css`
    margin: ${theme.spaces.small} 0;
    font-size: ${theme.fonts.size.medium};
    color: ${theme.colors.slate};
  `,
  bottom: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.small};
    color: ${theme.colors.logo};
    a:hover {
      color: ${theme.colors.white};
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
    gap: ${theme.spaces.large};
    ${position === 'top' ? linksStyle.top(theme) : linksStyle.bottom(theme)};
  `}
`;
