/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles, app } from "./App-styles";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";

export function App() {
  return (
    <div css={app}>
      <Global styles={globalStyles} />
      <Layout>
        <Header />
        <AddTask />
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
