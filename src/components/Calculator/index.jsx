import React from 'react';

import { Container } from './styles';

import Button from '../../components/Button';
import Display from '../../components/Display';

const Calculator = () => {
  

  const clearMemory = () => {
    console.log('Limpar!');
  }

  const setOperation = (operation) => {
    console.log(operation);
  }

  const addDigit = (number) => {
    console.log(number);
  }

  return (
    <Container>
      <Display > 100 </Display>
      <Button isTriple onClick={() => clearMemory()}> AC </Button>
      <Button 
        className="operator" 
        onClick={(event) => setOperation(event.target.innerHTML)}
      > / </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 7 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 8 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 9 </Button>
      <Button 
        className="operator"
        onClick={(event) => setOperation(event.target.innerHTML)}
      > * </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 4 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 5 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 6 </Button>
      <Button 
        className="operator"
        onClick={(event) => setOperation(event.target.innerHTML)}
      > - </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 1 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 2 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> 3 </Button>
      <Button 
        className="operator"
        onClick={(event) => setOperation(event.target.innerHTML)}
      > + </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}isDouble> 0 </Button>
      <Button onClick={(event) => addDigit(event.target.innerHTML)}> . </Button>
      <Button 
        className="operator"
        onClick={(event) => setOperation(event.target.innerHTML)}
      > = </Button>
    </Container>
  )
}

export default Calculator;