/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import { Global } from "@emotion/react";
import { globalStyles, app } from "./App-styles";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";
import { State } from "../../redux/reducers";
import { switchTheme } from "../../redux/actions";
import { AppDispatch } from "../../redux/store";
import { HeaderCallback } from "../Header";

export interface AppProps extends HeaderCallback {
  theme: "lightTheme" | "darkTheme";
}

export function App(props: AppProps) {
  return (
    <div css={app} data-theme={props.theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Header onSwitchTheme={props.onSwitchTheme} />
        <AddTask />
        <TaskList />
      </Layout>
    </div>
  );
}

function mapStateToProps(state: State): Pick<State, "theme"> {
  return {
    theme: state.theme,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onSwitchTheme: () => {
      dispatch(switchTheme());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
