import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/App/App-styles";
import { addDecorator, addParameters } from "@storybook/react";
import { withRootAttribute } from "storybook-addon-root-attribute";

addDecorator(withRootAttribute);
addParameters({
  rootAttribute: {
    attribute: "data-theme",
    defaultState: {
      name: "Default",
      value: "lightTheme",
    },
    states: [
      {
        name: "Light",
        value: "lightTheme",
      },
      {
        name: "Dark",
        value: "darkTheme",
      },
    ],
  },
});

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  layout: "fullscreen",
};
