import { Story } from "@storybook/react";
import {
  TaskFilters,
  TaskFiltersProps,
} from "../components/TaskFilters/TaskFilters";

// eslint-disable-next-line
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

const Template: Story<TaskFiltersProps> = (args) => <TaskFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasksNumber: 1,
  activeFilter: "all",
};
