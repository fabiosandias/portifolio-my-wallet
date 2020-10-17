import React from 'react';
import GlobalStyle from './styles/GlobalStyles'
import Layout from './components/layout/Layout';
import dark from './styles/themes/Dark';

import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard/Dashboard';
import List from './pages/list/List';

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;
