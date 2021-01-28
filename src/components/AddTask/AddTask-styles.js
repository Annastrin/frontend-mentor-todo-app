import { css } from '@emotion/react';
import { colors } from '../App/App-styles';

export const addTaskForm = css`
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 22px;
    z-index: 1;
    width: 26px;
    height: 26px;
    margin-top: -13px;
    border: 1px solid ${colors.lightTheme.veryLightGrayishBlue};
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

export const addTaskField = css`
  border: 0;
  border-radius: 5px;
  padding-left: 73px;
  font-size: 1em;
  letter-spacing: -0.3px;

  &:hover, &:focus {
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