/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {Background} from '../Background';
import {layout} from './Layout-styles';

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 540px;
  margin: 0 auto;
`;

function Layout({children}){
  return(
    <div css={layout}>
      <Background/>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout;