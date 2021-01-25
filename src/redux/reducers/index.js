import { ADD_TASK } from '../actionTypes';

function rootReducer(state, action) {

  switch(action.type) {
    case ADD_TASK:
      return {
        tasks: [action.payload.text, ...state.tasks]
      };
    default:
      return {
        tasks: [...state.tasks]
      };
  }
};

export default rootReducer;