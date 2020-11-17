import { createGlobalStyle } from 'styled-components';

//Esse estilo é acessado por todas as paginas, por isso é importado no App.js
//É interessante colocar o reset nele.
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`

