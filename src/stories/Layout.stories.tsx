import { Story } from "@storybook/react";
import { Layout, LayoutProps } from "../components/Layout/Layout";

// eslint-disable-next-line
export default {
  title: "Layout",
  component: Layout,
  argTypes: {},
};

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {};
