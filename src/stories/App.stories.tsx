import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";
import { store } from "../redux/store";
import { App } from "../components/App";

const withProvider = (StoryComponent: () => React.ReactElement) => (
  <Provider store={store}>
    <StoryComponent />
  </Provider>
);

storiesOf("App", module)
  .addDecorator(withProvider)
  .add("default", () => <App />);
