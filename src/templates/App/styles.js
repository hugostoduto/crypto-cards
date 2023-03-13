import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

.app-container{

width: 100%;
height: 100vh;


}
.app-container h1{
font-size: 3rem;
color: ${theme.colors.white};
}
.stats-container{
display: flex;
width: 90%;
justify-content: center;
overflow: hidden;
overflow-x: auto;
flex-wrap: wrap;
}
.top-5{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

}

`}

`;