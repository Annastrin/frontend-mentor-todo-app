import React from 'react';
import {Background} from '../components/Background';

// eslint-disable-next-line
export default {
  title: 'Background',
  component: Background,
  argTypes: {
  },
};

const Template = (args) => <Background {...args} />;

export const Default = Template.bind({});
Default.args = {
};