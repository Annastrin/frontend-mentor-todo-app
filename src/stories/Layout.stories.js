import React from 'react';
import {Layout} from '../components/Layout';

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