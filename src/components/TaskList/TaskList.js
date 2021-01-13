/** @jsxImportSource @emotion/react */
import {taskList} from './TaskList-styles';
import {Task} from '../Task';

function TaskList(props){
  return(
    <ul css={taskList}>
      {props.tasks.map((task, i) => <li key={`task-`+i}><Task taskName={task} taskId={`task-`+i}/></li>)}
    </ul>
  )
}

export default TaskList;