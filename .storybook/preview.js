import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/App/App-styles";

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
