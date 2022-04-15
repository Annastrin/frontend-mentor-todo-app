import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_STATE,
  SHOW_ALL_TASKS,
  SHOW_ACTIVE_TASKS,
  SHOW_COMPLETED_TASKS,
  CLEAR_COMPLETED_TASKS,
  SWITCH_THEME
} from './actionTypes';

export const addTask = (text: string) => ({
  type: ADD_TASK as typeof ADD_TASK,
  payload: {
    text
  }
});

export const removeTask = (id: string) => ({
  type: REMOVE_TASK as typeof REMOVE_TASK,
  payload: {
    id
  }
});

export const toggleTaskState = (id: string, taskState: boolean) => ({
  type: TOGGLE_TASK_STATE as typeof TOGGLE_TASK_STATE,
  payload: {
    id,
    taskState
  }
});

export const showAllTasks = () => ({
  type: SHOW_ALL_TASKS as typeof SHOW_ALL_TASKS
});

export const showActiveTasks = () => ({
  type: SHOW_ACTIVE_TASKS as typeof SHOW_ACTIVE_TASKS
});

export const showCompletedTasks = () => ({
  type: SHOW_COMPLETED_TASKS as typeof SHOW_COMPLETED_TASKS
});

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS as typeof CLEAR_COMPLETED_TASKS
});

export const switchTheme = () => ({
  type: SWITCH_THEME as typeof SWITCH_THEME
});