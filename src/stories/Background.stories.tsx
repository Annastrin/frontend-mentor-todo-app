import { Story } from "@storybook/react";
import { Background } from "../components/Background";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Background",
  component: Background,
  argTypes: {},
};

const Template: Story = (args) => <Background {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "darkTheme",
};
