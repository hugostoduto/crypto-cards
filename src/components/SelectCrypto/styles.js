import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  .selectCrypto-title{
    font-size: 1rem;
    color: ${theme.colors.white};
  }

`}
`;
