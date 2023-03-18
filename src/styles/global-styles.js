import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  h1,h2,h3,h4,h5,h6,p,hr{
    margin:0 ;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
 html, body{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8c7af9, #000428);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8c7af9, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  }
  ::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: #000428;
}

::-webkit-scrollbar-thumb {
  background-color: #8c7af9;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #1e1e20;
}
`;
