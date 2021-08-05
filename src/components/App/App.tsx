/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import { Global } from "@emotion/react";
import { globalStyles, app } from "./App-styles";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";
import { switchTheme } from "../../redux/actions";
import { AppDispatch } from "../../redux/store";
import { HeaderCallback } from "../Header";

export interface AppProps extends HeaderCallback {}

export function App(props: AppProps) {
  return (
    <div css={app}>
      <Global styles={globalStyles} />
      <Layout>
        <Header onSwitchTheme={props.onSwitchTheme} />
        <AddTask />
        <TaskList />
      </Layout>
    </div>
  );
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onSwitchTheme: () => {
      dispatch(switchTheme());
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
