import { ADD_TASK } from './actionTypes'

export const addTask = text => ({
  type: ADD_TASK,
  payload: {
    text
  }
});