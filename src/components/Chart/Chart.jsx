import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { Line } from 'react-chartjs-2';

export const Chart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinStamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.lenght; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinStamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString(),
    );
  }
  const data = {
    labels: coinStamp,
    datasets: [
      {
        label: 'price in USD',
        data: coinPrice,
        fill: false,
        backgrounColor: '#ffff',
        boderColor: '#000',
      },
    ],
  };
  const options = {
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
      <Line options={options} data={data} />
    </Styled.Container>
  );
};

Chart.propTypes = {
  children: P.node.isRequired,
};
