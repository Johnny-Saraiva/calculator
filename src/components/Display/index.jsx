import React from 'react';

import { Container } from './styles';

const Display = (props) => {
  return <Container>{props.value}</Container>
}

export default Display;