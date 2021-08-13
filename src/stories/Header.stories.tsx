import { Story } from "@storybook/react";
import { Header, HeaderCallback } from "../components/Header/Header";

interface HeaderStoryProps extends HeaderCallback {
  theme: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Header",
  component: Header,
  decorators: [
    (StoryComponent: Story) => (
      <div style={{ backgroundColor: "blue" }}>
        <StoryComponent />
      </div>
    ),
  ],
  argTypes: {},
};

const Template: Story<HeaderStoryProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "lightTheme",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "darkTheme",
};
