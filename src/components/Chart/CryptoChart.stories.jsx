import React from 'react';
import { CryptoChart } from './CryptoChart';

export default {
  title: 'CryptoChart',
  component: CryptoChart,
  args: {
    children: 'CryptoChart',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <CryptoChart {...args} />
    </div>
  );
};
