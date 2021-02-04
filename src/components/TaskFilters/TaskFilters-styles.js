import { css } from '@emotion/react';
import {colors} from '../App/App-styles';

export const actionBar = css`
  display: flex;
  justify-content: space-between;
  padding: 17px 24px;
  font-size: 14px;
  background-color: ${colors.primary.white};
  color: ${colors.lightTheme.darkGrayishBlue};
  letter-spacing: -0.1px;

  button {
    border: 0;
    padding: 0;
    background-color: transparent;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    letter-spacing: -0.1px;
    outline: 0;
  }
`;

export const leftItems = css`
  display: inline-block;
  min-width: 75px;
`;

export const filters = css`
  padding-left: 35px;
`;

export const filterBtn = css`
  margin: 0 9px;
  color: ${colors.lightTheme.darkGrayishBlue};
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s;
`;

export const activeFilterBtn = css`
  color: ${colors.primary.brightBlue};
`;

export const clearCompletedBtn = css`
  color: ${colors.lightTheme.darkGrayishBlue};
  cursor: pointer;
  letter-spacing: -0.1px;
`;