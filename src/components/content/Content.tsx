import React, { FunctionComponent } from 'react';
import { Container } from './Styles';

const Content: FunctionComponent = ({ children }) => {
  return (
      <Container>
          { children }
      </Container>
  );
}

export default Content;