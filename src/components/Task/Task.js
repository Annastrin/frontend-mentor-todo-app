/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTaskState } from '../../redux/actions';
import {task, taskContent, checkmark, removeTaskBtn} from './Task-styles';
import {ReactComponent as IconCross} from './images/icon-cross.svg';

export function Task(props){
  const currentTask = useRef(null);

  const handleRemove = () => {
    props.onRemoveTask(currentTask.current.id);
  }

  const handleClick = () => {
    props.onToggleTaskState(currentTask.current.id, !props.completed);
  }

  return(
    <div css={task}>
      <input type="checkbox" checked={props.completed} id={props.taskId} name={props.taskName} ref={currentTask} onChange={handleClick}/>
      <label htmlFor={props.taskId} css={taskContent}>
        <span css={checkmark}></span>
        {props.taskName}
      </label>
      <button css={removeTaskBtn} onClick={handleRemove}><IconCross/></button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveTask: (id) => {dispatch(removeTask(id))},
    onToggleTaskState: (id, taskState) => {dispatch(toggleTaskState(id, taskState))}
  };
}

export default connect(null, mapDispatchToProps)(Task);