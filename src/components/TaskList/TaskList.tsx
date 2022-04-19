/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import {
  removeTask,
  toggleTaskState,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks,
} from "../../redux/actions";
import { taskList } from "./TaskList-styles";
import { Task, TaskCallbacks } from "../Task";
import { TaskFilters, TaskFiltersCallbacks } from "../TaskFilters";
import { State, StateTask } from "../../redux/reducers";
import { AppDispatch } from "../../redux/store";

export interface TaskListProps
  extends Pick<State, "tasks" | "activeFilter">,
    TaskCallbacks,
    TaskFiltersCallbacks {}

export function TaskList(props: TaskListProps) {
  const activeTasksNumber = props.tasks.filter((task) => !task.completed)
    .length;
  const filterMap = {
    all: () => true,
    active: (task: StateTask) => !task.completed,
    completed: (task: StateTask) => task.completed,
  };

  return (
    <div css={taskList}>
      <ul>
        {props.tasks.filter(filterMap[props.activeFilter]).map((task) => (
          <li key={task.id}>
            <Task
              taskName={task.name}
              taskId={task.id}
              completed={task.completed}
              onToggleTaskState={props.onToggleTaskState}
              onRemoveTask={props.onRemoveTask}
            />
          </li>
        ))}
      </ul>
      {props.tasks.length > 0 && (
        <TaskFilters
          activeFilter={props.activeFilter}
          tasksNumber={activeTasksNumber}
          onShowAll={props.onShowAll}
          onShowActive={props.onShowActive}
          onShowCompleted={props.onShowCompleted}
          onClearCompleted={props.onClearCompleted}
        />
      )}
    </div>
  );
}

function mapStateToProps(state: State): Pick<State, "tasks" | "activeFilter"> {
  return {
    tasks: state.tasks,
    activeFilter: state.activeFilter,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onRemoveTask: (id: string) => {
      dispatch(removeTask(id));
    },
    onToggleTaskState: (id: string, taskState: boolean) => {
      dispatch(toggleTaskState(id, taskState));
    },
    onShowAll: () => {
      dispatch(showAllTasks());
    },
    onShowActive: () => {
      dispatch(showActiveTasks());
    },
    onShowCompleted: () => {
      dispatch(showCompletedTasks());
    },
    onClearCompleted: () => {
      dispatch(clearCompletedTasks());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
