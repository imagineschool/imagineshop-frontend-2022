import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from '../components/Layout';
import ShoppingCartProvider from '../contexts/ShoppingCartContext';
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  :root {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#f73f01',
    secondary: '#777'
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ShoppingCartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShoppingCartProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
