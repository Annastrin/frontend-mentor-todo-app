/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import {taskList} from './TaskList-styles';
import {Task} from '../Task';
import {TaskFilters} from '../TaskFilters';

function TaskList(props){
  const activeTasksNumber = props.tasks.filter(task => !task.completed).length;

  return(
    <ul css={taskList}>
      {props.tasks.map(task => <li key={`task-${task.id}`}><Task taskName={task.name} taskId={task.id} completed={task.completed}/></li>)}
      <TaskFilters tasksNumber={activeTasksNumber}/>
    </ul>
  )
}

function mapStateToProps(state) {
  return {tasks: state.tasks};
}

export default connect(mapStateToProps)(TaskList);