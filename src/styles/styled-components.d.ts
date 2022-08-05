import dark from './theme/dark';
import light from './theme/dark';

export type Theme = typeof dark;
export type Theme = typeof light;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
