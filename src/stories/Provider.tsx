import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProviderWrapperProps {
  children: JSX.Element;
  store: typeof store;
}

const ProviderWrapper = ({ children, store }: ProviderWrapperProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
