/* eslint-disable no-unused-vars */
import * as Styled from './styles';
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
import {
  BankFilled,
  CodeFilled,
  DollarCircleFilled,
  FundFilled,
  SlidersFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export const App = () => {
  const { data, isFetching } = useGetCryptosQuery(5);
  const coins = data?.data?.coins;
  const stats = data?.data?.stats;
  if (isFetching) return <Loader />;

  return (
    <Styled.Container>
      <div className="app-container">
        <div className="header">
          <div className="header-icon">
            <SlidersFilled />
          </div>

          <h1>Crypto Market</h1>
        </div>
        <div className="section-header">
          <div className="section-header-title">
            <div className="icon">
              <BankFilled />
            </div>
            <h1>Crypto Stats</h1>
          </div>
        </div>
        <div className="stats-container">
          <InfoCards
            title="Total Cryptocurrencies"
            info={millify(stats?.total)}
          />
          <InfoCards title="Total Exchanges" info={stats?.totalExchanges} />
          <InfoCards
            title="Total 24h Volume"
            info={millify(stats?.total24hVolume)}
          />
          <InfoCards title="Total Market" info={millify(stats?.totalMarkets)} />
          <InfoCards
            title="Total Market Cap"
            info={millify(stats?.totalMarketCap)}
          />
        </div>
        <div className="section-header">
          <div className="section-header-title">
            <div className="icon">
              <DollarCircleFilled />
            </div>
            <h1>Top 5 Crypto Coins</h1>
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
        <div className="button">
          <Link to="/allcryptos">See All</Link>
        </div>
        <div className="section-header">
          <div className="section-header-title">
            <div className="icon">
              <FundFilled />
            </div>
            <h1>Chart</h1>
          </div>
        </div>
        <div className="chart-container">
          <CryptoChart coinData={coins} />
        </div>
        <div className="footer">
          <CodeFilled />
          <p>developed by @hugostoduto</p>
        </div>
      </div>
    </Styled.Container>
  );
};
