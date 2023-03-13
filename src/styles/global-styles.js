import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  h1,h2,h3,h4,h5,h6,p,hr{
    margin:0 ;
    padding: 0;
  }
 html{
    font-family: 'Roboto', sans-serif;
    margin:0 ;
    padding: 0;

  }
  body{
    margin:0 ;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: #141E30;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

`;
