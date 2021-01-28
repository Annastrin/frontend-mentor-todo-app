/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import {taskList} from './TaskList-styles';
import {Task} from '../Task';

function TaskList(props){
  return(
    <ul css={taskList}>
      {props.tasks.map(task => <li key={`task-${task.id}`}><Task taskName={task.name} taskId={task.id}/></li>)}
    </ul>
  )
}

function mapStateToProps(state) {
  return {tasks: state.tasks};
}

export default connect(mapStateToProps)(TaskList);