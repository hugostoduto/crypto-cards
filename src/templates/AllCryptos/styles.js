import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

.allCryptos-container{
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #000428;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8c7af9, #000428);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8c7af9, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.allCryptos-section-header{
  width: 90%;
  color: ${theme.colors.white};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section-header hr{
  margin-top: 10px;
  width: 50%;
  border:solid 0.1rem ;

}
.icon{
  font-size: 3rem;
  margin-right: 20px;
}
.section-header-title{
  display: flex;
  align-items: center;
}
.section-header-title h1{
  font-weight: 700;
  font-size: 2.7rem;
}
.cards-container{
  justify-content: center;
  padding: 70px 0px;

  width: 100%;
  display: flex;
  flex-wrap: wrap;

}

.allCryptos-button a{


  font-size: 1rem;
  color: ${theme.colors.white};
  font-weight: 300;
}
`}
`;
