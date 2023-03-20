import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

  .card-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.darkGray};
    width: 400px;
    height: 240px;
    border-radius: 20px;
    position: relative;
    margin: 20px 20px;
    box-shadow: ${theme.shadows.lightShadow};

  }
  .card-image{
    position:absolute ;
    top: 15px;
    right: 5px;
    border: solid 3px ${theme.colors.purple};
    width: 70px;
    border-radius: 999px;
    height: 70px;
    box-shadow: ${theme.shadows.lightShadow};
  }
  .card-image img{

    background-color: ${theme.colors.white};
    object-fit: contain;
    width: 70px;
    height: 70px;
    border-radius: 999px;

  }
  .card-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.dark};
    width: 90%;
    height: 180px;
    border-radius: 20px;
    box-shadow: ${theme.shadows.lightShadow};

    border: solid 3px ${theme.colors.purple};
  }
  .card-description-title{
    width: 100%;
    display: flex;
    align-items: center;

  }
  .card-description-title h3{
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: 700;
    margin-left:20px;

  }
  .card-description-title h4{
    color: ${theme.colors.purple};
    font-size: 1.2rem;
    font-weight: 400;
    margin-left:20px;

  }

  .card-description hr{

    margin: 10px ;
    width: 90%;
    border: solid 1px ${theme.colors.purple};

  }
  .card-description-text-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 15px;
  }
  .card-description-text {
    display: flex;
    width: 100%;
    align-items: center;


  }
  .card-description-text h4{
    margin: 0px 0px 5px 20px;
    color: ${theme.colors.gray};
    font-weight: 'medium';
    font-size: 1.4rem;

  }
  .card-description-text p{
    color: ${theme.colors.purple};
    font-weight: medium;
    font-size: 1.2rem;
    margin-left: 10px;
  }
  @media (max-width: 420px){
    .card-container{
      width: 290px;
      height: 170px;

    }
    .card-image{
      width: 50px;
      height: 50px;
    }
    .card-image img{
      width: 50px;
      height: 50px;
    }
    .card-description{
      height: 80%;
    }
    .card-description-title h3{

    font-size: 1.4rem;


  }
  .card-description-title h4{

    font-size: 0.9rem;


  }
  .card-description hr{
    width: 100%;
    margin: 5px ;
  }
  .card-description-text-container{
    margin-top: 10px;
  }
    .card-description-text h4{
    font-size: 1.0rem;

  }
  .card-description-text p{
    font-size: 0.8rem;
  }
  }

`}
`;
