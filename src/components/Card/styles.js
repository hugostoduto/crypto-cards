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

  }
  .card-image{
    position:absolute ;
    top: 15px;
    right: 5px;
    border: solid 3px ${theme.colors.purple};
    width: 70px;
    border-radius: 999px;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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

    margin: 10px 0px 0px 0px;
    width: 90%;
    border: solid 1px ${theme.colors.purple};

  }
  .card-description-text-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: centers;
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
  @media (max-width:400px){
    .card-container{
      width: 95%;
    }
    .card-image{
      width: 50px;
      height: 50px;
    }
    .card-image img{
      width: 50px;
      height: 50px;

    }
  }
`}
`;