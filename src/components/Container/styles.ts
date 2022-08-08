import styled, { css, DefaultTheme } from 'styled-components';

type ContainerProps = {
  width: 'xSmall' | 'small' | 'medium' | 'large';
  height: string;
};

const containerWidth = {
  xSmall: (theme: DefaultTheme) => css`
    max-width: ${theme.screen.size.xSmall};
  `,
  small: (theme: DefaultTheme) => css`
    max-width: ${theme.screen.size.small};
  `,
  medium: (theme: DefaultTheme) => css`
    max-width: ${theme.screen.size.medium};
  `,
  large: (theme: DefaultTheme) => css`
    max-width: ${theme.screen.size.large};
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, width, height }) => css`
    height: ${height};
    margin: 0 auto;
    ${containerWidth[width](theme)}
  `}
`;
