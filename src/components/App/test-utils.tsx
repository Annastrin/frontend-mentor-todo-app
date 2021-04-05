import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer, { State } from "../../redux/reducers";

interface WrapperProps {
  children: JSX.Element[];
}

interface CustomRenderProps {
  initialState: State;
}

const customRender = (
  ui: JSX.Element,
  { initialState, ...renderOptions }: CustomRenderProps
) => {
  const store = createStore(reducer, initialState);

  function Wrapper({ children }: WrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, {
    wrapper: Wrapper as React.FunctionComponent,
    ...renderOptions,
  });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender };
