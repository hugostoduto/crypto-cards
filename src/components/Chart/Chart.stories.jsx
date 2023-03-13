import React from 'react';
import { Chart } from './Chart';

export default {
  title: 'Chart',
  component: Chart,
  args: {
    children: 'Chart',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Chart {...args} />
    </div>
  );
};
