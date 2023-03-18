import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .MuiCircularProgress-indeterminate{
    color: ${theme.colors.white};
  }
  .MuiCircularProgress-svg{
    scale: 2;

  }
`}
`;
