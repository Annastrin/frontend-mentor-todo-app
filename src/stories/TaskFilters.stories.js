import React from 'react';
import {TaskFilters} from '../components/TaskFilters/TaskFilters';

export default {
  title: 'TaskFilters',
  component: TaskFilters,
  argTypes: {
    onShowAll: { action: 'show all tasks' },
    onShowActive: { action: 'show active tasks' },
    onShowCompleted: { action: 'show completed tasks' },
    onClearCompleted: { action: 'clear completed tasks' }
  },
};

const Template = (args) => <TaskFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasksNumber: 1,
  activeFilter: 'all'
};