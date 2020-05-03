import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import Calculator from './components/Calculator';


ReactDOM.render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <Calculator />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
