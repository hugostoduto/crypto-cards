/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React, { useState } from 'react';
import { useGetHistoryQuery } from '../../services/cryptoApi';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
ChartJs.defaults.backgroundColor = '#9BD0F5';
ChartJs.defaults.borderColor = '#8c7af9';
ChartJs.defaults.color = '#fff';

export const CryptoChart = ({ coinData }) => {
  const [coinId, setCoinId] = useState({
    name: 'Bitcoin',
    id: 'Qwsogvtv82FCd',
  });

  const { data: history, loading } = useGetHistoryQuery(coinId.id);
  if (loading) return '<h1>Loading</h1>';
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < history?.data?.history?.length; i += 1) {
    coinPrice.push(history?.data?.history[i]?.price);
  }

  for (let i = 0; i < history?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(history?.data?.history[i]?.timestamp).toLocaleDateString(),
    );
  }
  console.log(coinTimestamp);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            color: '#fff',
          },
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const items = coinData?.map((coin) => ({
    key: coin.uuid,
    label: (
      <a
        onClick={() => setCoinId({ name: coin.name, id: coin.uuid })}
        value={coin.uuid}
      >
        {coin.name}
      </a>
    ),
  }));
  return (
    <Styled.Container>
      <div className="crypto-chart-container">
        <div className="crypto-chart-controls">
          <h4>Choose:</h4>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="selectCrypto-title">
                <h3>Coins</h3>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <h4>Exibe info of : </h4>
          <h3>{coinId.name}</h3>
        </div>
        <div className="crypto-chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </Styled.Container>
  );
};

CryptoChart.propTypes = {
  coinHistory: P.node.isRequired,
  coinData: P.node.isRequired,
};
