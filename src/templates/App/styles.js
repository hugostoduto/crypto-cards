import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

.app-container{
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #000428;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8c7af9, #000428);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8c7af9, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.header{
  font-size: 1.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.lightShadow};
  height: 170px;
  margin-bottom:50px ;
  border-bottom: solid  3px ${theme.colors.purple};
}
.header-icon{
  font-size: 4rem;

}
.header h1{
  margin-left: 50px;
}
.section-header{
  width: 90%;
  color: ${theme.colors.white};
  margin-bottom: 20px;
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
.stats-container, .cards-container{
  justify-content: center;
  padding: 70px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}

.chart-container{
  padding: 70px 0px;
  width: 100%;
  display: flex;
  justify-content: center;

}
.footer{
  display: flex;
  margin: 20px 0px;
  color: ${theme.colors.purple};
  font-weight: 300;
  font-size: 1.2rem;
}
.footer p{
  margin-left: 10px;
}
.button{
  margin-bottom: 50px;

}
.button a{
  padding: 20px 120px;
  background-color: #8c7af9;
  border-radius: 20px;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  font-weight: 700;
}
.footer a{
  margin-left: 10px;
  font-size: 1.2rem;
  color: ${theme.colors.purple};
  font-weight: 700;
}


@media (max-width: 768px){
  .cards-container,.stats-container{
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x:auto ;
    margin-bottom: 30px;
    padding: 30px;
    box-sizing: border-box;
  }
}
@media (max-width: 420px){
  .header{
  font-size: 1.0rem;
  width: 100%;
  flex-direction: column;
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.lightShadow};
  height: 150px;
  margin-bottom:50px ;
  border-bottom: solid  3px ${theme.colors.purple};
}
.header-icon{
  font-size: 3rem;

}
.header h1{
  margin-left: 0px;
}
.icon{
  font-size: 2rem;
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
.button a{
  padding: 20px 90px;
  font-size: 1.2rem;

}
}
`}

`;
