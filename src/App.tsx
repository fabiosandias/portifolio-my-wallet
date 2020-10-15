import React from 'react';
import GlobalStyle from './styles/GlobalStyles'
import Layout from './components/layout/Layout';
import dark from './styles/themes/Dark';

import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App;
