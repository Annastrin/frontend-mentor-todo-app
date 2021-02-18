/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import {
  removeTask,
  toggleTaskState,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks
} from '../../redux/actions';
import {taskList} from './TaskList-styles';
import {Task} from '../Task';
import {TaskFilters} from '../TaskFilters';

export function TaskList(props){
  const activeTasksNumber = props.tasks.filter(task => !task.completed).length;
  const filterMap = {
    all: () => true,
    active: task => !task.completed,
    completed: task => task.completed
  };

  return(
    <ul css={taskList}>
      {props.tasks.filter(filterMap[props.filter]).map(task => (
        <li key={`task-${task.id}`}>
          <Task
            taskName={task.name}
            taskId={task.id}
            completed={task.completed}
            onToggleTaskState={props.onToggleTaskState}
            onRemoveTask={props.onRemoveTask}/>
        </li>
      ))}
      {props.tasks.length > 0 &&
        <TaskFilters
          activeFilter={props.filter}
          tasksNumber={activeTasksNumber}
          onShowAll={props.onShowAll}
          onShowActive={props.onShowActive}
          onShowCompleted={props.onShowCompleted}
          onClearCompleted={props.onClearCompleted}/>
      }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveTask: (id) => {dispatch(removeTask(id))},
    onToggleTaskState: (id, taskState) => {dispatch(toggleTaskState(id, taskState))},
    onShowAll: () => {dispatch(showAllTasks())},
    onShowActive: () => {dispatch(showActiveTasks())},
    onShowCompleted: () => {dispatch(showCompletedTasks())},
    onClearCompleted: () => {dispatch(clearCompletedTasks())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);