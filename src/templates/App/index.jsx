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
import { Typography } from 'antd';
import {
  BankFilled,
  CodeFilled,
  DollarCircleFilled,
  FundFilled,
  SlidersFilled,
} from '@ant-design/icons';
const { Title } = Typography;

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
        <div className="section-header">
          <div className="section-header-title">
            <div className="icon">
              <DollarCircleFilled />
            </div>
            <h1>Crypto Coins</h1>
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
        <div className="section-header">
          <div className="section-header-title">
            <div className="icon">
              <FundFilled />
            </div>
            <h1>Charts</h1>
          </div>
        </div>
        <div className="chart-container">
          <CryptoChart coinData={coins} />
        </div>
        <div className="footer">
          <CodeFilled />
          <p>Develope by @hugostoduto</p>
        </div>
      </div>
    </Styled.Container>
  );
};

App.propTypes = {
  children: P.node.isRequired,
};
