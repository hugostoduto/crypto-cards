import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
export const InfoCards = ({ title, info }) => {
  return (
    <Styled.Container>
      <div className="InfoCards-container">
        <div className="InfoCards-description">
          <div className="InfoCards-description-title">
            <h3>{title}</h3>
          </div>
          <hr />
          <div className="InfoCards-description-text-container">
            <span className="InfoCards-description-text">
              <p>{info}</p>
            </span>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

InfoCards.propTypes = {
  title: P.string,
  info: P.string,
};
