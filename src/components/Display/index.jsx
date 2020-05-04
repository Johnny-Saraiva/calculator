import React from 'react';

import { Container } from './styles';

const Display = ({children, ...rest }) => {
  return (
  <Container {...rest}>
    {children}
  </Container>
  )
}

export default Display;