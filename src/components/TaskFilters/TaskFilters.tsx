/** @jsxImportSource @emotion/react */
import {
  actionBar,
  leftItems,
  filters,
  filterBtn,
  activeFilterBtn,
  clearCompletedBtn,
} from "./TaskFilters-styles";

export interface TaskFiltersCallbacks {
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
  onClearCompleted: () => void;
}

export interface TaskFiltersProps extends TaskFiltersCallbacks {
  activeFilter: "all" | "active" | "completed";
  tasksNumber: number;
}

export function TaskFilters(props: TaskFiltersProps) {
  const showAll = () => {
    props.onShowAll();
  };
  const showActive = () => {
    props.onShowActive();
  };
  const showCompleted = () => {
    props.onShowCompleted();
  };

  const clearCompleted = () => {
    props.onClearCompleted();
  };

  const filterIsActive = (filterName: "all" | "active" | "completed") => {
    return props.activeFilter === filterName;
  };

  return (
    <div css={actionBar}>
      <span css={leftItems}>
        {props.tasksNumber === 1
          ? `${props.tasksNumber} item left`
          : `${props.tasksNumber} items left`}
      </span>
      <div css={filters}>
        <button
          onClick={showAll}
          css={[filterBtn, filterIsActive("all") && activeFilterBtn]}
        >
          All
        </button>
        <button
          onClick={showActive}
          css={[filterBtn, filterIsActive("active") && activeFilterBtn]}
        >
          Active
        </button>
        <button
          onClick={showCompleted}
          css={[filterBtn, filterIsActive("completed") && activeFilterBtn]}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} css={clearCompletedBtn}>
        Clear Completed
      </button>
    </div>
  );
}

export default TaskFilters;
