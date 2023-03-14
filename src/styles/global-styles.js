import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  h1,h2,h3,h4,h5,h6,p,hr{
    margin:0 ;
    padding: 0;
  }
 html, body{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding: 0;
    width: 100%;
    height: 100vh;

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
