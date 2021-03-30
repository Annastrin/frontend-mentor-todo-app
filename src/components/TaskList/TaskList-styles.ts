import { css } from '@emotion/react';
import { colors } from '../App/App-styles';

export const taskList = css`
  list-style: none;
  margin: 0;
  border-radius: 5px;
  padding: 0;
  box-shadow: 0 30px 30px 1px ${colors.lightTheme.veryLightGrayishBlue};
  overflow: hidden;
`;