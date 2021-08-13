import { Story } from "@storybook/react";
import { AddTask, AddTaskProps } from "../components/AddTask/AddTask";

interface AddTaskStoryProps extends AddTaskProps {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "AddTask",
  component: AddTask,
  argTypes: {
    onAddTask: { action: "Task added" },
  },
};

const Template: Story<AddTaskStoryProps> = (args) => (
  <AddTask onAddTask={args.onAddTask} />
);

export const Default = Template.bind({});
Default.args = {
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "darkTheme",
};
