import { css, DefaultTheme } from 'styled-components';

export const Colors = {
  dawntrail: (theme: DefaultTheme) => css`
    color: ${theme.colors.gold};
  `,
  endwalker: (theme: DefaultTheme) => css`
    color: ${theme.colors.blue};
  `,
  shadowbringers: (theme: DefaultTheme) => css`
    color: ${theme.colors.purple};
  `,
  stormblood: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
  heavensward: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  arr: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightBlue};
  `,
  geral: (theme: DefaultTheme) => css`
    color: ${theme.colors.logo};
  `,
};
