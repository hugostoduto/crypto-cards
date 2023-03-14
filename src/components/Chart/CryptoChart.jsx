import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { useGetHistoryQuery } from '../../services/cryptoApi';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs, Colors } from 'chart.js/auto';

export const CryptoChart = () => {
  const coinId = 'Qwsogvtv82FCd';
  const { data: history, loading } = useGetHistoryQuery(coinId);
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
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#8c7af9',
        borderColor: '#8c7af9',
        color: '#fff',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
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
  return (
    <Styled.Container>
      <Line data={data} options={options} />
    </Styled.Container>
  );
};

CryptoChart.propTypes = {
  coinHistory: P.node.isRequired,
};
