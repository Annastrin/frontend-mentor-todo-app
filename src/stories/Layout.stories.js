import React from 'react';
import {Layout} from '../components/Layout';

// eslint-disable-next-line
export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
  },
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
};