import { css } from '@emotion/react';
import {colors, mq} from '../App/App-styles';

export const actionBar = css`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 65px;
  border-radius: 0 0 5px 5px;
  padding: 17px 20px;
  font-size: 12px;
  background-color: ${colors.primary.white};
  color: ${colors.lightTheme.darkGrayishBlue};
  letter-spacing: -.1px;

  ${mq[1]} {
    display: flex;
    padding: 17px 24px;
    font-size: 14px;
    text-align: center;
  }

  button {
    border: 0;
    padding: 0;
    background-color: transparent;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: -.2px;
  }
`;

export const leftItems = css`
  display: inline-block;
  width: 100%;
  max-width: 105px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const filters = css`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 18px);
  width: 100%;
  height: 48px;
  left: 0;
  right: 0;
  background-color: ${colors.primary.white};
  border-radius: 5px;
  box-shadow: 0 30px 30px 1px ${colors.lightTheme.veryLightGrayishBlue};

  ${mq[1]} {
    position: static;
    height: auto;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const filterBtn = css`
  margin: 0 8px;
  color: ${colors.lightTheme.darkGrayishBlue};
  font-weight: 700;
  cursor: pointer;
  transition: color .3s;

  &:hover,
  &:active {
    color: ${colors.lightTheme.veryDarkGrayishBlue};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const activeFilterBtn = css`
  color: ${colors.primary.brightBlue};
`;

export const clearCompletedBtn = css`
  width: 100%;
  max-width: 105px;
  color: ${colors.lightTheme.darkGrayishBlue};
  cursor: pointer;
  font-size: 12px;
  letter-spacing: -.1px;
  text-align: right;
  transition: color .3s;

  ${mq[1]} {
    font-size: 14px;
  }

  &:hover,
  &:active {
    color: ${colors.lightTheme.veryDarkGrayishBlue};
  }
`;