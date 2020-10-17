import React from 'react';
import { Grid } from './Styles';
import MainHeader from '../main-header/MainHeader';
import Aside from '../aside/Aside';
import Content from '../content/Content';


interface layoutProps {}

const Layout: React.FunctionComponent = ({ children }) => {
  return (
      <Grid>
          <MainHeader />
          <Aside />
          <Content>
            { children }
          </Content>
      </Grid>
  )
}

export default Layout;