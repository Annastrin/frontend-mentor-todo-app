/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../redux/actions';
import {task, taskContent, checkmark, removeTaskBtn} from './Task-styles';
import {ReactComponent as IconCross} from './images/icon-cross.svg';

function Task(props){
  const currentTask = useRef(null);

  const handleRemove = () => {
    props.removeTask(currentTask.current.name);
  }

  return(
    <div css={task}>
      <input type="checkbox" id={props.taskId} name={props.taskName} ref={currentTask}/>
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
    removeTask: (name) => {dispatch(removeTask(name))}
  };
}

export default connect(null, mapDispatchToProps)(Task);