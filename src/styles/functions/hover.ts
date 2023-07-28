import { css, DefaultTheme } from 'styled-components';

export const Hover = {
  dawntrail: (theme: DefaultTheme) => css`
  &:hover {
    color: ${theme.colors.gold};
  }
  `,
  endwalker: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.blue};
    }
  `,
  shadowbringers: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.purple};
    }
  `,
  stormblood: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.red};
    }
  `,
  heavensward: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.green};
    }
  `,
  arr: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.lightBlue};
    }
  `,
  geral: (theme: DefaultTheme) => css`
    &:hover {
      color: ${theme.colors.slate500};
    }
  `,
};
