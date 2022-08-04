import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/global-styles';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const handleTheme = () => setTheme(theme.title === 'light' ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <Header handleTheme={handleTheme} />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
