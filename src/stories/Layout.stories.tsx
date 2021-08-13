import { Story } from "@storybook/react";
import { Layout, LayoutProps } from "../components/Layout/Layout";

interface LayoutStoryProps extends LayoutProps {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout",
  component: Layout,
  argTypes: {},
};

const Template: Story<LayoutStoryProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "darkTheme",
};
