import { Story } from "@storybook/react";
import { Background } from "../components/Background";

// eslint-disable-next-line
export default {
  title: "Background",
  component: Background,
  argTypes: {},
};

const Template: Story = (args) => <Background {...args} />;

export const Default = Template.bind({});
Default.args = {};
