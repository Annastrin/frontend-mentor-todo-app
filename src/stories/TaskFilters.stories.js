import React from 'react';
import {TaskFilters} from '../components/TaskFilters/TaskFilters';

export default {
  title: 'TaskFilters',
  component: TaskFilters,
  argTypes: {
  },
};

const Template = (args) => <TaskFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasksNumber: 1
};