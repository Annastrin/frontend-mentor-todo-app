/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import { addTaskForm, addTaskField, btnSubmit } from './AddTask-styles';
import { task } from '../Task/Task-styles';

export function AddTask(props){
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.length > 0) {
      props.onAddTask(value);
      setValue("");
    }
  };

  return(
    <form css={addTaskForm} onSubmit={handleSubmit}>
      <input css={[task, addTaskField]}
             type="text" id="addTaskField"
             name="addTaskField"
             placeholder="Create a new todo..."
             value={value}
             onChange={handleChange}/>
      <button type="submit" css={btnSubmit}>Submit</button>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTask: (value) => {dispatch(addTask(value))}
  };
}

export default connect(null, mapDispatchToProps)(AddTask);