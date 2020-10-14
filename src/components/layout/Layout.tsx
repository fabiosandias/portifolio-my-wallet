import React from 'react';
import { Grid } from './Styles';
import MainHeader from '../main-header/MainHeader';
import Aside from '../aside/Aside';
import Content from '../content/Content';

const Layout = () => {
  return (
      <Grid>
          <MainHeader />
          <Aside />
          <Content />
      </Grid>
  )
}

export default Layout;