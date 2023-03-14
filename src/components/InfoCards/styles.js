import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

  .InfoCards-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.darkGray};
    width: 240px;
    height: 140px;
    border-radius: 20px;
    position: relative;
    margin: 20px;
    box-shadow: ${theme.shadows.lightShadow};

  }


  .InfoCards-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 180px;
    border-radius: 20px;



  }
  .InfoCards-description-title{
    width: 100%;
    display: flex;
    align-items: center;

  }
  .InfoCards-description-title h3{
    color: ${theme.colors.white};
    font-size: 1.2rem;
    font-weight: 700;
    margin-left:10px;

  }


  .InfoCards-description hr{

    margin: 10px 0px 0px 0px;
    width: 90%;
    border: solid 1px ${theme.colors.purple};

  }
  .InfoCards-description-text-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: centers;
    margin-top: 15px;
  }
  .InfoCards-description-text {
    display: flex;
    width: 100%;
    align-items: center;


  }

  .InfoCards-description-text p{
    color: ${theme.colors.purple};
    font-weight: medium;
    font-size: 1.8rem;
    margin-left: 10px;
  }
  @media (max-width:400px){
    .InfoCards-container{
      width: 95%;
    }
    .InfoCards-image{
      width: 50px;
      height: 50px;
    }
    .InfoCards-image img{
      width: 50px;
      height: 50px;

    }

  }
`}
`;
