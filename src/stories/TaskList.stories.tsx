import { Story } from "@storybook/react";
import { TaskList, TaskListProps } from "../components/TaskList/TaskList";

interface TaskListStoryProps extends TaskListProps {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TaskList",
  component: TaskList,
  argTypes: {
    onToggleTaskState: { action: "clicked" },
    onRemoveTask: { action: "removed" },
    onShowAll: { action: "show all tasks" },
    onShowActive: { action: "show active tasks" },
    onShowCompleted: { action: "show completed tasks" },
    onClearCompleted: { action: "clear completed tasks" },
  },
};

const Template: Story<TaskListStoryProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      name: "Todo1",
      id: "Todo1-0",
      completed: false,
    },
    {
      name: "Todo2",
      id: "Todo2-1",
      completed: true,
    },
  ],
  activeFilter: "all",
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  tasks: [
    {
      name: "Todo1",
      id: "Todo1-0",
      completed: false,
    },
    {
      name: "Todo2",
      id: "Todo2-1",
      completed: true,
    },
  ],
  activeFilter: "all",
  theme: "darkTheme",
};
