/** @jsxImportSource @emotion/react */
import {addTaskForm} from './AddTaskField-styles';
import {addTask} from './AddTaskField-styles';
import {task} from '../Task/Task-styles';

function AddTaskField(props){
  return(
    <form css={addTaskForm}>
      <input css={[task, addTask]} type="text" id="addTask" name="addTask" placeholder="Create a new todo..."/>
    </form>
  )
}

export default AddTaskField;