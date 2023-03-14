/* eslint-disable no-unused-vars */
import * as Styled from './styles';
import P from 'prop-types';
import {
  useGetCryptosQuery,
  useGetHistoryQuery,
  useGetCryptoDetailsQuery,
} from '../../services/cryptoApi';
import { Card } from '../../components/Card/Card';
import millify from 'millify';
import { InfoCards } from '../../components/InfoCards/InfoCards';
import { CryptoChart } from '../../components/Chart/CryptoChart';
import { SelectCrypto } from '../../components/SelectCrypto/SelectCrypto';
import React from 'react';

export const App = () => {
  const { data, isfetching } = useGetCryptosQuery(5);

  /* const { data: coin, coinLoading } = useGetCryptoDetailsQuery('Qwsogvtv82FCd'); */
  if (isfetching) return '<h1>Loading</h1>';

  /* if (coinLoading) return '<h1>Loading</h1>'; */

  const coins = data?.data?.coins;
  /* const coinsDetails = coin?.data?.coin; */
  const stats = data?.data?.stats;

  return (
    <Styled.Container>
      <div className="app-container">
        <h1>Global Crypto Stats</h1>
        <div className="stats-container">
          <InfoCards
            title="Total Cryptocurrencie"
            info={millify(stats?.total)}
          />
          <InfoCards title="Total Exchanges" info={stats?.totalExchanges} />
          <InfoCards
            title="Total 24h Valume"
            info={millify(stats?.total24hVolume)}
          />
          <InfoCards title="Total Market" info={millify(stats?.totalMarkets)} />
          <InfoCards
            title="Total Market Cap"
            info={millify(stats?.totalMarketCap)}
          />
        </div>
        <h1>Top 5 Cryptos</h1>
        <div className="top-5">
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

        <div className="chart">
          <CryptoChart coinData={coins} />
        </div>
      </div>
    </Styled.Container>
  );
};

App.propTypes = {
  children: P.node.isRequired,
};
