/** @jsxImportSource @emotion/react */
import { app } from "./App-styles";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";

export function App() {
  return (
    <div css={app}>
      <Layout>
        <Header />
        <AddTask />
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
