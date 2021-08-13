import { Story } from "@storybook/react";
import {
  TaskFilters,
  TaskFiltersProps,
} from "../components/TaskFilters/TaskFilters";

interface TaskFiltersStoryProps extends TaskFiltersProps {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TaskFilters",
  component: TaskFilters,
  argTypes: {
    onShowAll: { action: "show all tasks" },
    onShowActive: { action: "show active tasks" },
    onShowCompleted: { action: "show completed tasks" },
    onClearCompleted: { action: "clear completed tasks" },
  },
};

const Template: Story<TaskFiltersStoryProps> = (args) => (
  <TaskFilters {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tasksNumber: 1,
  activeFilter: "all",
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  tasksNumber: 1,
  activeFilter: "all",
  theme: "darkTheme",
};
