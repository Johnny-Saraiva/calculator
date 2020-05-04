import React, { useState } from 'react';

import { Container } from './styles';

import Button from '../../components/Button';
import Display from '../../components/Display';


const Calculator = () => {
  
  const [displayValue, setDisplayValue] = useState('');
 
  const clearMemory = () => {
    setDisplayValue('');
  }

  const handleClick = (value) => {
    if (value === '.' && displayValue.includes('.')) {
      return;
    }
    setDisplayValue(displayValue.concat(value));
  }

  const handleBackspace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  }

  return (

    <Container>
      <Display > {displayValue} </Display>
      <Button isDouble onClick={() => clearMemory()}> Clear </Button>
      <Button onClick={() => handleBackspace()}> C </Button>
      <Button 
        className="operator" 
         onClick={(event) => handleClick(event.target.innerText)}
      > / </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 7 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 8 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 9 </Button>
      <Button 
        className="operator"
         onClick={(event) => handleClick(event.target.innerText)}
      > * </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 4 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 5 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 6 </Button>
      <Button 
        className="operator"
         onClick={(event) => handleClick(event.target.innerText)}
      > - </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 1 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 2 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> 3 </Button>
      <Button 
        className="operator"
         onClick={(event) => handleClick(event.target.innerText)}
      > + </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}isDouble> 0 </Button>
      <Button onClick={(event) => handleClick(event.target.innerText)}> . </Button>
      <Button 
        className="operator"
         onClick={(event) => handleClick(event.target.innerText)}
      > = </Button>
    </Container>
  )
}

export default Calculator;