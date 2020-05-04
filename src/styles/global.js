import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }
  body {
    -webkit-font-smoothing: antialiased;
    
    color: #FFF;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: #312E38;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  body, input, button {
    font-family: 'RobotoMono', monospace;
  }

  button {
    cursor: pointer;
  }
`;



