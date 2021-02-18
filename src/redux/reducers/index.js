import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_STATE,
  SHOW_ALL_TASKS,
  SHOW_ACTIVE_TASKS,
  SHOW_COMPLETED_TASKS,
  CLEAR_COMPLETED_TASKS
} from '../actionTypes';

let taskCounter = 0;
const initialState = {
  tasks: [
  'Complete online JavaScript course',
  'Jog around the park 3x',
  '10 minutes meditation',
  'Read for 1 hour',
  'Pick up groceries',
  'Complete Todo App on Frontend Mentor'
  ].map(r => ({name: r, id: taskCounter++, completed: false})),
  filter: 'all'
};

function rootReducer(state = initialState, action) {

  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [{name: action.payload.text, id: taskCounter++}, ...state.tasks]
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          if (task.id === Number(action.payload.id)) {
            return false;
          }
          return true;
        })
      }
    case TOGGLE_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === Number(action.payload.id)) {
            return {name: task.name, id: task.id, completed: action.payload.taskState}
          } else {
            return {name: task.name, id: task.id, completed: task.completed}
          }
        })
      };
    case SHOW_ALL_TASKS:
      return {
        ...state,
        filter: 'all'
      };
    case SHOW_ACTIVE_TASKS:
      return {
        ...state,
        filter: 'active'
      };
    case SHOW_COMPLETED_TASKS:
      return {
        ...state,
        filter: 'completed'
      };
    case CLEAR_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed)
      }
    default:
      return state;
  }
};

export default rootReducer;