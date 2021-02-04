import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK_STATE } from './actionTypes';

export const addTask = text => ({
  type: ADD_TASK,
  payload: {
    text
  }
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: {
    id
  }
});

export const toggleTaskState = (id, taskState) => ({
  type: TOGGLE_TASK_STATE,
  payload: {
    id,
    taskState
  }
});