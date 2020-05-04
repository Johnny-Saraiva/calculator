import React from 'react';

import { Container } from './styles';

import Button from '../../components/Button';
import Display from '../../components/Display';

const Calculator = () => {
  return (
    <Container>
      <Display value={100}/>
      <Button isTriple> AC </Button>
      <Button className="operator"> / </Button>
      <Button > 7 </Button>
      <Button > 8 </Button>
      <Button > 9 </Button>
      <Button className="operator"> * </Button>
      <Button > 4 </Button>
      <Button > 5 </Button>
      <Button > 6 </Button>
      <Button className="operator"> - </Button>
      <Button > 1 </Button>
      <Button > 2 </Button>
      <Button > 3 </Button>
      <Button className="operator"> + </Button>
      <Button isDouble> 0 </Button>
      <Button > . </Button>
      <Button className="operator"> = </Button>
    </Container>
  )
}

export default Calculator;