import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme/dark';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
