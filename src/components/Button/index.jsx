import React from 'react';

import { Button } from './styles';

const Buttons = ({children, props, ...rest}) => {
  return (
  <Button {...rest}>

    {children}

  </Button>
  )
}

export default Buttons;