import { Story } from "@storybook/react";
import { Task, TaskProps } from "../components/Task/Task";

// eslint-disable-next-line
export default {
  title: "Task",
  component: Task,
  argTypes: {
    onToggleTaskState: { action: "clicked" },
    onRemoveTask: { action: "removed" },
  },
};

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  taskName: "Todo",
  taskId: 0,
  completed: false,
};

export const Completed = Template.bind({});
Completed.args = {
  taskName: "Todo",
  taskId: 1,
  completed: true,
};
