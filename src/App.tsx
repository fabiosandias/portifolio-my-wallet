import React from 'react';
import GlobalStyle from './styles/GlobalStyles'
import dark from './styles/themes/Dark';

import { ThemeProvider } from 'styled-components';

import Routes from './routers/Routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App;
