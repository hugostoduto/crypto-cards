import * as Styled from './styles';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
  return (
    <Styled.Container>
      <div className="loader">
        <CircularProgress color="primary" />
      </div>
    </Styled.Container>
  );
};
