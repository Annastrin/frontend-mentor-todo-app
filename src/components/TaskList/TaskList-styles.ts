import { css } from '@emotion/react';
import { colors } from '../App/App-styles';

export const taskList = css`
  border-radius: 5px;
  box-shadow: 0 30px 30px 1px ${colors.lightTheme.veryLightGrayishBlue};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }
`;