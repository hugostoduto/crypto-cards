import React from 'react';
import { InfoCards } from './InfoCards';

export default {
  title: 'InfoCards',
  component: InfoCards,
  args: {
    children: 'InfoCards',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <InfoCards {...args} />
    </div>
  );
};
