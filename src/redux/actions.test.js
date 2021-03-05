import * as actions from './actions';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const text = 'Write the first jest test';
    const expectedAction = {
      type: types.ADD_TASK,
      payload: {
        text
      }
    };
    expect(actions.addTask(text)).toEqual(expectedAction);
  });
});