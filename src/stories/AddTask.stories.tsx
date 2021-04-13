import { Story } from "@storybook/react";
import { AddTask, AddTaskProps } from "../components/AddTask/AddTask";

// eslint-disable-next-line
export default {
  title: "AddTask",
  component: AddTask,
  argTypes: {
    onAddTask: { action: "Task added" },
  },
};

const Template: Story<AddTaskProps> = (args) => <AddTask {...args} />;

export const Default = Template.bind({});
Default.args = {};
