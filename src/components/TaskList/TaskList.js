/** @jsxImportSource @emotion/react */
import { connect } from "react-redux";
import {taskList} from './TaskList-styles';
import {Task} from '../Task';

function TaskList(props){
  return(
    <ul css={taskList}>
      {props.tasks.map((task, i) => <li key={`task-`+i}><Task taskName={task} taskId={`task-`+i}/></li>)}
    </ul>
  )
}

function mapStateToProps(state) {
  return {tasks: state.tasks};
}

export default connect(mapStateToProps)(TaskList);