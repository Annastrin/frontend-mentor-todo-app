import { Story } from "@storybook/react";
import { Task, TaskProps } from "../components/Task/Task";

interface TaskStoryProps extends TaskProps {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Task",
  component: Task,
  argTypes: {
    onToggleTaskState: { action: "clicked" },
    onRemoveTask: { action: "removed" },
  },
};

const Template: Story<TaskStoryProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  taskName: "Todo",
  taskId: "Todo-0",
  completed: false,
  theme: "lightTheme",
};

export const Completed = Template.bind({});
Completed.args = {
  taskName: "Todo",
  taskId: "Todo-1",
  completed: true,
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  taskName: "Todo",
  taskId: "Todo-2",
  completed: false,
  theme: "darkTheme",
};

export const DarkCompleted = Template.bind({});
DarkCompleted.args = {
  taskName: "Todo",
  taskId: "Todo-3",
  completed: true,
  theme: "darkTheme",
};
