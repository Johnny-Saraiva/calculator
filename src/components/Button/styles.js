import styled, {css} from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  ${(props) => props.isDouble && css`grid-column: span 2;` }
  ${(props) => props.isTriple && css`grid-column: span 3;` }
  
  font-size: 1.4em;

  ${props => props.className === 'operator' 
    ? css`background-color: #ff9000;
          color: #fff;` 
    : css` background-color: #f0f0f0;`
  };

  border: none;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;

  &:active {
    background-color: ${props => props.className === 'operator' ? shade(0.2,'#ff9000') : shade(0.2,'#f0f0f0')};
  }

`;

