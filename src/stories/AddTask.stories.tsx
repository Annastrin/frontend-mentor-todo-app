import { Story } from "@storybook/react";
import { AddTask, AddTaskProps } from "../components/AddTask/AddTask";

// eslint-disable-next-line import/no-anonymous-default-export
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
