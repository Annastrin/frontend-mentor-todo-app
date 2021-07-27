import { css } from '@emotion/react';
import {colors, mq} from '../App/App-styles';
import checkIcon from './images/icon-check.svg';
import crossIcon from './images/icon-cross.svg';

export const removeTaskBtn = css`
  width: 30px;
  height: 30px;
  margin-right: 0;
  margin-left: auto;
  border: 0;
  padding: 10px;
  background-color: transparent;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 12px;
  cursor: pointer;
  transition: all .3s;
  font-size: 0;

  ${mq[1]} {
    background-size: 18px;
    visibility: hidden;
    opacity: 0;
  }
`;

export const task = css`
  display: flex;
  align-items: center;
  position: relative;
  height: 53px;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
  padding: 10px 12px 10px 52px;
  background-color: ${colors.primary.white};
  letter-spacing: -.2px;

  ${mq[1]} {
    height: 65px;
    padding: 10px 24px 10px 73px;
    letter-spacing: -.3px;
  }

  & input {
    position: absolute;
    left: 24px;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover button {
    ${mq[1]} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const taskContent = css`
  display: block;
  max-height: 100%;
  color: ${colors.lightTheme.veryDarkGrayishBlue};
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  input:checked ~ & {
    color: ${colors.lightTheme.lightGrayishBlue};
    text-decoration: line-through;
  }
`;

export const checkmark = css`
  position: absolute;
  top: 50%;
  left: 20px;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  border: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
  border-radius: 50%;
  background-color: transparent;

  ${mq[1]} {
    left: 24px;
    width: 24px;
    height: 24px;
    margin-top: -12px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: ${colors.primary.white};
    }

    input:checked ~ label &::before {
      display: none;
    }
  }

  &::after {
    content: "";
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

  input:checked ~ label &,
  input:hover ~ label &,
  label:hover & {
    background-image: ${colors.primary.checkBackground};
    border: 0;
  }

  input:checked ~ label &::after {
    display: block;
  }
`;