import { css } from '@emotion/react';
import {colors, mq} from '../../style-guide';

export const actionBar = css`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 65px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 17px 20px;
  font-size: 12px;
  letter-spacing: -.1px;
  transition: color .3s, background-color .3s;

  &:only-child {
    border-radius: 5px;
  }

  [data-theme="lightTheme"] & {
    background-color: ${colors.lightTheme.filtersBgColor};
    color: ${colors.lightTheme.filtersTextColor};
  }

  [data-theme="darkTheme"] & {
    background-color: ${colors.darkTheme.filtersBgColor};
    color: ${colors.darkTheme.filtersTextColor};
  }

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
  border-radius: 5px;
  transition: all .3s;

  [data-theme="lightTheme"] & {
    background-color: ${colors.lightTheme.filtersBgColor};
    box-shadow: 0 30px 30px 1px ${colors.lightTheme.boxShadowColor};
  }

  [data-theme="darkTheme"] & {
    background-color: ${colors.darkTheme.filtersBgColor};
    box-shadow: 0 30px 30px 1px ${colors.darkTheme.boxShadowColor};
  }

  ${mq[1]} {
    position: static;
    height: auto;
    border-radius: 0;

    [data-theme="lightTheme"] &,
    [data-theme="darkTheme"] & {
      box-shadow: none;
    }
  }
`;

export const filterBtn = css`
  margin: 0 8px;
  font-weight: 700;
  color: inherit;
  cursor: pointer;
  transition: color .3s;

  [data-theme="lightTheme"] &:hover,
  [data-theme="lightTheme"] &:active {
    color: ${colors.lightTheme.textColor};
  }

  [data-theme="darkTheme"] &:hover,
  [data-theme="darkTheme"] &:active {
    color: ${colors.darkTheme.textColor};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const activeFilterBtn = css`
  color: ${colors.activeFilterColor};
`;

export const clearCompletedBtn = css`
  width: 100%;
  max-width: 105px;
  color: inherit;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: -.1px;
  text-align: right;
  transition: color .3s;

  ${mq[1]} {
    font-size: 14px;
  }

  [data-theme="lightTheme"] &:hover,
  [data-theme="lightTheme"] &:active {
    color: ${colors.lightTheme.textColor};
  }

  [data-theme="darkTheme"] &:hover,
  [data-theme="darkTheme"] &:active {
    color: ${colors.darkTheme.textColor};
  }
`;
