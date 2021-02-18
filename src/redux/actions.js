import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_STATE,
  SHOW_ALL_TASKS,
  SHOW_ACTIVE_TASKS,
  SHOW_COMPLETED_TASKS,
  CLEAR_COMPLETED_TASKS
} from './actionTypes';

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

export const showAllTasks = () => ({
  type: SHOW_ALL_TASKS
});

export const showActiveTasks = () => ({
  type: SHOW_ACTIVE_TASKS
});

export const showCompletedTasks = () => ({
  type: SHOW_COMPLETED_TASKS
});

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS
});