import React from 'react';
import {TaskList} from '../components/TaskList/TaskList';
import * as TaskStories from './Task.stories';


export default {
  title: 'TaskList',
  component: TaskList,
  argTypes: {
    onToggleTaskState: { action: 'clicked' },
    onRemoveTask: { action: 'removed' }
  },
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      ...TaskStories.Default.args.task,
      name: 'Todo1',
      id: 0,
      completed: false
    },
    {
      ...TaskStories.Default.args.task,
      name: 'Todo2',
      id: 1,
      completed: true
    }
  ]
};