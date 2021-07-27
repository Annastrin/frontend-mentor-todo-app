import { css } from '@emotion/react';
import { colors, mq } from '../App/App-styles';

export const addTaskForm = css`
  position: relative;
  margin-bottom: 15px;

  ${mq[1]} {
    margin-bottom: 23px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 1;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
    border-radius: 50%;
    box-sizing: border-box;

    ${mq[1]} {
      left: 24px;
      width: 24px;
      height: 24px;
      margin-top: -13px;
    }
  }
`;

export const addTaskField = css`
  height: 50px;
  border: 0;
  border-radius: 5px;
  padding-left: 52px;
  font-size: 1em;
  letter-spacing: -.2px;

  ${mq[1]} {
    height: 65px;
    padding-left: 73px;
    letter-spacing: -.3px;
  }

  &:hover,
  &:focus {
    border: 0;
    border-radius: 5px;
    outline: 0;
  }
`;

export const btnSubmit = css`
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;