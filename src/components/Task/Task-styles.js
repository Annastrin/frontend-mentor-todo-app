import { css } from '@emotion/react';
import {colors} from '../App/App-styles';
import checkIcon from './images/icon-check.svg';

export const task = css`
  display: flex;
  align-items: center;
  position: relative;
  height: 65px;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
  padding: 10px 22px 10px 73px;
  background-color: ${colors.primary.white};

  & input {
    position: absolute;
    left: 22px;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const taskContent = css`
  display: block;
  overflow: hidden;
  cursor: pointer;

  input:checked ~ & {
    color: ${colors.lightTheme.lightGrayishBlue};
    text-decoration: line-through;
  }
`;

export const checkmark = css`
  position: absolute;
  top: 50%;
  left: 22px;
  width: 26px;
  height: 26px;
  margin-top: -13px;
  border: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
  border-radius: 50%;
  background-color: transparent;

  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked ~ label & {
    background-image: ${colors.primary.checkBackground};
    border: 0;
  }

  input:checked ~ label &::after {
    display: block;
  }
`;

export const removeTaskBtn = css`
  margin-right: 0;
  margin-left: auto;
  border: 0;
  padding: 10px;
  background: none;
  cursor: pointer;
`;