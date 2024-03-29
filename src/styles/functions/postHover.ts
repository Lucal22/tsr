import { css, DefaultTheme } from 'styled-components';

export const PostHover = {
  dawntrail: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.gold};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.gold};
        }
      }
    }
  `,
  endwalker: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.blue};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.blue};
        }
      }
    }
  `,
  shadowbringers: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.purple};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.purple};
        }
      }
    }
  `,
  stormblood: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.red};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.red};
        }
      }
    }
  `,
  heavensward: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.green};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.green};
        }
      }
    }
  `,
  arr: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.lightBlue};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.lightBlue};
        }
      }
    }
  `,
  geral: (theme: DefaultTheme) => css`
    &:hover {
      box-shadow: 0.1rem 0.2rem 0.6rem ${theme.colors.logo};
      bottom: 0.3rem;
      h2 {
        a {
          color: ${theme.colors.logo};
        }
      }
    }
  `,
};
