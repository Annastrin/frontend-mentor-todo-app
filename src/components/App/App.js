/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {app} from './App-styles';
import {Background} from '../Background';
import {Header} from '../Header';
import {AddTask} from '../AddTask';
import {TaskList} from '../TaskList';

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 540px;
  margin: 0 auto;
`;

function App() {
  return (
    <div css={app}>
      <Background/>
      <Container>
        <Header/>
        <AddTask/>
        <TaskList/>
      </Container>
    </div>
  );
}

export default App;
