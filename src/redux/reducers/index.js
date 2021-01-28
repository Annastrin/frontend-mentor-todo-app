import { ADD_TASK, REMOVE_TASK } from '../actionTypes';

let taskCounter = 0;
const initialState = {
  tasks: [
  'Complete online JavaScript course',
  'Jog around the park 3x',
  '10 minutes meditation',
  'Read for 1 hour',
  'Pick up groceries',
  'Complete Todo App on Frontend Mentor'
  ].map(r => ({name: r, id: taskCounter++}))
};

function rootReducer(state = initialState, action) {

  switch(action.type) {
    case ADD_TASK:
      return {
        tasks: [{name: action.payload.text, id: taskCounter++}, ...state.tasks]
      };
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter(task => {
          if (task.name === action.payload.text) {
            return false;
          }
          return true;
        })
      }
    default:
      return {
        tasks: [...state.tasks]
      };
  }
};

export default rootReducer;