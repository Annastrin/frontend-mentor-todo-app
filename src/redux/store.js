import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  tasks: [
  'Complete online JavaScript course',
  'Jog around the park 3x',
  '10 minutes meditation',
  'Read for 1 hour',
  'Pick up groceries',
  'Complete Todo App on Frontend Mentor'
  ]
};

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());