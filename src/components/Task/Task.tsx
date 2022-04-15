/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { task, taskContent, checkmark, removeTaskBtn } from "./Task-styles";

export interface TaskCallbacks {
  onRemoveTask: (id: string) => void;
  onToggleTaskState: (id: string, taskState: boolean) => void;
}

export interface TaskProps extends TaskCallbacks {
  taskName: string;
  taskId: string;
  completed: boolean;
}

export function Task(props: TaskProps) {
  const currentTask = useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    if (currentTask && currentTask.current && currentTask.current.id) {
      props.onRemoveTask(currentTask.current.id);
    }
  };

  const handleClick = () => {
    console.log(currentTask?.current?.id);
    if (currentTask && currentTask.current && currentTask.current.id) {
      props.onToggleTaskState(currentTask.current.id, !props.completed);
    }
  };

  return (
    <div css={task}>
      <input
        type="checkbox"
        checked={props.completed}
        id={props.taskId}
        name={props.taskId}
        ref={currentTask}
        onChange={handleClick}
      />
      <label htmlFor={props.taskId} css={taskContent}>
        <span css={checkmark}></span>
        {props.taskName}
      </label>
      <button
        type="button"
        css={removeTaskBtn}
        onClick={handleRemove}
        data-testid={props.taskId}
      >
        Delete
      </button>
    </div>
  );
}

export const name2KebabWithId = (name: string, id: string) => {
  return name.toLowerCase().split(" ").join("-") + "-" + id;
};

export default Task;
