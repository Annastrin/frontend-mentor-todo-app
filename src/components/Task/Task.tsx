/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { task, taskContent, checkmark, removeTaskBtn } from "./Task-styles";
import { ReactComponent as IconCross } from "./images/icon-cross.svg";

export interface TaskCallbacks {
  onRemoveTask: (id: number) => void;
  onToggleTaskState: (id: number, taskState: boolean) => void;
}

export interface TaskProps extends TaskCallbacks {
  taskName: string;
  taskId: number;
  completed: boolean;
}

export function Task(props: TaskProps) {
  const currentTask = useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    if (currentTask && currentTask.current && currentTask.current.id) {
      props.onRemoveTask(parseInt(currentTask.current.id));
    }
  };

  const handleClick = () => {
    if (currentTask && currentTask.current && currentTask.current.id) {
      props.onToggleTaskState(
        parseInt(currentTask.current.id),
        !props.completed
      );
    }
  };

  return (
    <div css={task}>
      <input
        type="checkbox"
        checked={props.completed}
        id={props.taskId.toString()}
        name={name2KebabWithId(props.taskName, props.taskId)}
        ref={currentTask}
        onChange={handleClick}
      />
      <label htmlFor={props.taskId.toString()} css={taskContent}>
        <span css={checkmark}></span>
        {props.taskName}
      </label>
      <button
        css={removeTaskBtn}
        onClick={handleRemove}
        data-testid={name2KebabWithId(props.taskName, props.taskId)}
      >
        <IconCross />
        <span>Remove</span>
      </button>
    </div>
  );
}

export const name2KebabWithId = (name: string, id: number) => {
  return name.toLowerCase().split(" ").join("-") + "-" + id;
};

export default Task;
