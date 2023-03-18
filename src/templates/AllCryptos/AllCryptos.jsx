import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { DollarCircleFilled } from '@ant-design/icons';
import millify from 'millify';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Card } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export const AllCryptos = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const coins = data?.data?.coins;
  if (isFetching) return <Loader />;
  return (
    <Styled.Container>
      <div className="allCryptos-container">
        <div className="allCryptos-section-header">
          <div className="section-header-title">
            <div className="icon">
              <DollarCircleFilled />
            </div>
            <h1>All Crypto Coins</h1>
          </div>
          <div className="allCryptos-button">
            <Link to="/">Back to Home</Link>
          </div>
        </div>
        <div className="cards-container">
          {coins?.map((coin) => (
            <Card
              key={coin.uuid}
              symbol={coin.symbol}
              name={coin.name}
              price={millify(coin.price)}
              change={millify(coin.change)}
              marketCap={millify(coin.marketCap)}
              iconUrl={coin.iconUrl}
            />
          ))}
        </div>
      </div>
    </Styled.Container>
  );
};

AllCryptos.propTypes = {
  children: P.node.isRequired,
};
