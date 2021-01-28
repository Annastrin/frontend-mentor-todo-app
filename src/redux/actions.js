import { ADD_TASK, REMOVE_TASK } from './actionTypes';

export const addTask = text => ({
  type: ADD_TASK,
  payload: {
    text
  }
});

export const removeTask = text => ({
  type: REMOVE_TASK,
  payload: {
    text
  }
})