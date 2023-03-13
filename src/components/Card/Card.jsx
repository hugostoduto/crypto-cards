import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const Card = ({ name, symbol, iconUrl, marketCap, price, change }) => {
  return (
    <Styled.Container>
      <div className="card-container">
        <div className="card-image">
          <img src={iconUrl} alt={name} />
        </div>
        <div className="card-description">
          <div className="card-description-title">
            <h3>{name}</h3> <h4>{symbol}</h4>
          </div>
          <hr />
          <div className="card-description-text-container">
            <span className="card-description-text">
              <h4>Price:</h4> <p>{price}</p>
            </span>
            <span className="card-description-text">
              <h4>Market Cap:</h4> <p>{marketCap}</p>
            </span>
            <span className="card-description-text">
              <h4>Daily Change:</h4> <p>{change}%</p>
            </span>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

Card.propTypes = {
  name: P.string,
  iconUrl: P.string,
  marketCap: P.string,
  price: P.string,
  change: P.string,
  symbol: P.string,
};
