import { createGlobalStyle } from 'styled-components';

export const colors = {
  swan: '#E9E9E9',
  polarbear: '#F4F4F4',
  panther: '#3A363A',
  leopard: '#FFBC00',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2rem 5rem;
    color: ${colors.panther};
    font-family: 'Trebuchet MS', sans-serif;
    line-height: 150%;
    background: ${colors.polarbear};
  }
`;
