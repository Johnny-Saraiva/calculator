import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  
  font-size: 1.4em;
  background-color: #f0f0f0;
  border: none;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;

  &:active {
    background-color: ${shade(0.2, '#f0f0f0')}
  }

`;