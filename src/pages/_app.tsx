import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/global-styles';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import { useEffect, useState } from 'react';
//import useLocalTheme from '../utils/useLocalTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const typeTheme = localStorage.getItem('theme');
    if (typeTheme != 'light') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }, []);
  const handleTheme = () => {
    if (theme.title === 'light') {
      setTheme(dark);
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme(light);
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header handleTheme={handleTheme} />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
