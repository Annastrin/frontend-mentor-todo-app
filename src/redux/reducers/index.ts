import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_STATE,
  SHOW_ALL_TASKS,
  SHOW_ACTIVE_TASKS,
  SHOW_COMPLETED_TASKS,
  CLEAR_COMPLETED_TASKS,
} from "../actionTypes";
import * as actions from "../actions";

let taskCounter = 0;

export type StateTask = {
  name: string;
  id: number;
  completed: boolean;
};

export type State = {
  tasks: StateTask[];
  activeFilter: "all" | "active" | "completed";
};

const initialState: State = {
  tasks: [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ].map((r) => ({ name: r, id: taskCounter++, completed: false })),
  activeFilter: "all",
};

type Action =
  | ReturnType<typeof actions.addTask>
  | ReturnType<typeof actions.removeTask>
  | ReturnType<typeof actions.toggleTaskState>
  | ReturnType<typeof actions.showAllTasks>
  | ReturnType<typeof actions.showActiveTasks>
  | ReturnType<typeof actions.showCompletedTasks>
  | ReturnType<typeof actions.clearCompletedTasks>;

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          { name: action.payload.text, id: taskCounter++, completed: false },
          ...state.tasks,
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === Number(action.payload.id)) {
            return false;
          }
          return true;
        }),
      };
    case TOGGLE_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === Number(action.payload.id)) {
            return {
              name: task.name,
              id: task.id,
              completed: action.payload.taskState,
            };
          } else {
            return { name: task.name, id: task.id, completed: task.completed };
          }
        }),
      };
    case SHOW_ALL_TASKS:
      return {
        ...state,
        activeFilter: "all",
      };
    case SHOW_ACTIVE_TASKS:
      return {
        ...state,
        activeFilter: "active",
      };
    case SHOW_COMPLETED_TASKS:
      return {
        ...state,
        activeFilter: "completed",
      };
    case CLEAR_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    default:
      return state;
  }
};

export default rootReducer;
