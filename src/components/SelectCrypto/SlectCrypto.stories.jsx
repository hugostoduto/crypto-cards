import React from 'react';
import { SelectCrypto } from './SelectCrypto';

export default {
  title: 'SelectCrypto',
  component: SelectCrypto,
  args: {
    children: 'SelectCrypto',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SelectCrypto {...args} />
    </div>
  );
};
