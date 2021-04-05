/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions";
import { AppDispatch } from "../../redux/store";
import { addTaskForm, addTaskField, btnSubmit } from "./AddTask-styles";
import { task } from "../Task/Task-styles";

interface AddTaskProps {
  onAddTask: (value: string) => void;
}

export function AddTask(props: AddTaskProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      props.onAddTask(value);
      setValue("");
    }
  };

  return (
    <form css={addTaskForm} onSubmit={handleSubmit}>
      <input
        css={[task, addTaskField]}
        type="text"
        id="addTaskField"
        name="addTaskField"
        placeholder="Create a new todo..."
        value={value}
        onChange={handleChange}
      />
      <button type="submit" css={btnSubmit}>
        Submit
      </button>
    </form>
  );
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onAddTask: (value: string) => {
      dispatch(addTask(value));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddTask);
