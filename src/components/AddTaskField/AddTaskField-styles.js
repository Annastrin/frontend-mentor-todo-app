import { css } from '@emotion/react';

export const addTaskForm = css`
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 22px;
    width: 26px;
    height: 26px;
    margin-top: -13px;
    border: 1px solid grey;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

export const addTask = css`
  border: 0;
  border-radius: 5px;
  padding-left: 73px;
  font-size: 1em;

  &:hover, &:focus {
    border: 0;
    border-radius: 5px;
    outline: 0;
  }
`;