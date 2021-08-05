import { css } from '@emotion/react';
import { mq } from '../../style-guide';

export const layout = css`
  position: relative;
  min-height: 100vh;
  padding: 48px 24px;

  ${mq[1]} {
    padding: 78px 24px 115px;
  }
`;