import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK_STATE } from '../actionTypes';

let taskCounter = 0;
const initialState = {
  tasks: [
  'Complete online JavaScript course',
  'Jog around the park 3x',
  '10 minutes meditation',
  'Read for 1 hour',
  'Pick up groceries',
  'Complete Todo App on Frontend Mentor'
  ].map(r => ({name: r, id: taskCounter++, completed: false}))
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
          if (task.id === Number(action.payload.id)) {
            return false;
          }
          return true;
        })
      }
    case TOGGLE_TASK_STATE:
      console.log(action.payload.id, action.payload.taskState);
      return {
        tasks: state.tasks.map(task => {
          if (task.id === Number(action.payload.id)) {
            return {name: task.name, id: task.id, completed: action.payload.taskState}
          } else {
            return {name: task.name, id: task.id, completed: task.completed}
          }
        })
      };
    default:
      return {
        tasks: [...state.tasks]
      };
  }
};

export default rootReducer;