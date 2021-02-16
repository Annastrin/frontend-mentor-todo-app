import React from 'react';
import {Background} from '../components/Background';

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