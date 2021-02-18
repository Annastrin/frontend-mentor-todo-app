/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import { removeTask, toggleTaskState, clearCompletedTasks } from '../../redux/actions';
import {taskList} from './TaskList-styles';
import {Task} from '../Task';
import {TaskFilters} from '../TaskFilters';

export function TaskList(props){
  const activeTasksNumber = props.tasks.filter(task => !task.completed).length;

  return(
    <ul css={taskList}>
      {props.tasks.map(task => (
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
          tasksNumber={activeTasksNumber}
          onClearCompleted={props.onClearCompleted}/>
      }
    </ul>
  )
}

function mapStateToProps(state) {
  return {tasks: state.tasks};
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveTask: (id) => {dispatch(removeTask(id))},
    onToggleTaskState: (id, taskState) => {dispatch(toggleTaskState(id, taskState))},
    onClearCompleted: () => {dispatch(clearCompletedTasks())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);