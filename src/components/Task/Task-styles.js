import { css } from '@emotion/react';
import {colors} from '../App/App-styles';

export const task = css`
  display: flex;
  align-items: center;
  height: 65px;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
  padding: 10px 22px;
  background-color: ${colors.primary.white};
`;

export const taskCheckbox = css``;

export const removeTaskBtn = css`
  margin-right: 0;
  margin-left: auto;
  border: 0;
  padding: 10px;
  background: none;
  cursor: pointer;
`;