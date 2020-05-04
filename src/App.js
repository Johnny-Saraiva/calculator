import React from 'react';

import GlobalStyles from './styles/global';
import Calculator from './components/Calculator';

const Display = ( { value } ) => {
  return (
    <>
      <h1>Calculator</h1>
      <Calculator />
      <GlobalStyles />
    </>
  )
}

export default Display;