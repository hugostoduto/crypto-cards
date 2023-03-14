import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
width: 70%;
.crypto-chart-container{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: relative;
  padding: 50px 20px;
  background-color: ${theme.colors.darkGray};
  border-radius: 50px;
  box-shadow: ${theme.shadows.lightShadow};
}
.crypto-chart-controls{
  width: 90%;
  display:flex ;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  background-color: ${theme.colors.darkGray};
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: ${theme.shadows.lightShadow};
  border: solid 2px ${theme.colors.purple};
}
.selectCrypto-title{
  font-size: 1.0rem;
  color: ${theme.colors.white};

}
.crypto-chart-controls h3{
  color: ${theme.colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 20px;


}
.crypto-chart-controls h4{
  color: ${theme.colors.purple};
  font-size: 1.2rem;
  font-weight: 400;
  margin-left:20px;


}

.crypto-chart{
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  box-shadow: ${theme.shadows.lightShadow};
  background-color: ${theme.colors.darkGray};
  padding: 20px 50px;
  border-radius: 20px;
  box-sizing: border-box;
  border: solid 2px ${theme.colors.purple};
}
`}
`;
