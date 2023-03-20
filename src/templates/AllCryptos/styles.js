import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

.allCryptos-container{

  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #000428;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8c7af9, #000428);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8c7af9, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.allCryptos-section-header{
  width: 100%;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  height: 120px;
  justify-content: space-between;
  box-shadow: ${theme.shadows.lightShadow};
  border-bottom: solid  3px ${theme.colors.purple};
}

.icon{
  font-size: 3rem;
  margin: 0px 20px 0px 50px;
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

  margin-right: 50px;
  font-size: 1rem;
  color: ${theme.colors.white};
  font-weight: 300;
}
@media (max-width: 768px){
  .allCryptos-section-header{
  font-size: 1.0rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.lightShadow};


}
.header-icon{
  font-size: 3rem;

}
.header h1{
  margin-left: 0px;
}
.icon{
  font-size: 2rem;
  margin: 0px;
  margin-right: 10px;
}
.section-header-title{
  display: flex;
  align-items: center;
}
.section-header-title h1{
  font-weight: 700;
  font-size: 1.7rem;
}
.allCryptos-button{
  margin-top: 10px;
}
.allCryptos-button a{
  margin: 0px;
  font-size: 1.2rem;

}
}
`}
`;
