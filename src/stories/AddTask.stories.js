import React from 'react';
import {AddTask} from '../components/AddTask/AddTask';

// eslint-disable-next-line
export default {
  title: 'AddTask',
  component: AddTask,
  argTypes: {
    onAddTask: {action: 'Task added'}
  },
};

const Template = (args) => <AddTask {...args} />;

export const Default = Template.bind({});
Default.args = {};