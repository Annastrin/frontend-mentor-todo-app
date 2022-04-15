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
    if (currentTask?.current?.id) {
      props.onRemoveTask(currentTask.current.id);
    }
  };

  const handleClick = () => {
    console.log(currentTask?.current?.id);
    if (currentTask?.current?.id) {
      props.onToggleTaskState(currentTask.current.id, !props.completed);
    }
  };

  return (
    <div css={task}>
      <input
        type="checkbox"
        checked={props.completed}
        id={props.taskId}
        name={nameWithId(props.taskName, props.taskId)}
        ref={currentTask}
        onChange={handleClick}
      />
      <label
        htmlFor={nameWithId(props.taskName, props.taskId)}
        css={taskContent}
      >
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

export const nameWithId = (name: string, id: string) => {
  return name.toLowerCase().split(" ").join("-") + "-" + id;
};

export default Task;
