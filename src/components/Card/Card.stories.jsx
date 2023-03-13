import React from 'react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  args: {
    children: 'Card',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
