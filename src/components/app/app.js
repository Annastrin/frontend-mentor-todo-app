/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {app} from './app-styles';
import {Header} from '../header';

const Container = styled.div`
  max-width: 540px;
  margin: 0 auto;
`;

function App() {
  return (
    <div css={app}>
      <Container>
        <Header/>
      </Container>
    </div>
  );
}

export default App;
