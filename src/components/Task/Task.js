/** @jsxImportSource @emotion/react */
import {task} from './Task-styles';
import {taskCheckbox} from './Task-styles';
import {removeTaskBtn} from './Task-styles';
import {ReactComponent as IconCross} from './images/icon-cross.svg';

function Task(props){
  return(
    <div css={task}>
      <input css={taskCheckbox} type="checkbox" id={props.taskId} name={props.taskName}/>
      <label for={props.taskId}>{props.taskName}</label>
      <button css={removeTaskBtn}><IconCross/></button>
    </div>
  )
}

export default Task;