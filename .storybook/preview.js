/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/App/App-styles";
import { app } from "../src/components/App/App-styles";

export const decorators = [
  /*
  (Story, args) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),  */
  (Story, options) => {
    const { args } = options;
    return args?.app ? (
      <>
        <Global styles={globalStyles} />
        <Story />
      </>
    ) : (
      <div css={app} data-theme={args.theme}>
        <Global styles={globalStyles} />
        <Story />
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  layout: "fullscreen",
};
