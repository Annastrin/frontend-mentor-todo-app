/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { connect } from 'react-redux';
import { actionBar, leftItems, filters, filterBtn, activeFilterBtn, clearCompletedBtn } from './TaskFilters-styles';

export function TaskFilters(props){
  const [activeFilter, setActiveFilter] = useState("showAll");

  const showAll = () => {
    setActiveFilter("showAll");
  };
  const showActive = () => {
    setActiveFilter("showActive");
  };
  const showCompleted = () => {
    setActiveFilter("showCompleted");
  };

  const clearCompleted = () => {

  };

  const filterIsActive = (filterName) => {
    return activeFilter === filterName;
  }

  return(
    <div css={actionBar}>
      <span css={leftItems}>{props.tasksNumber === 1 ? `${props.tasksNumber} item left` : `${props.tasksNumber} items left`}</span>
      <div css={filters}>
        <button onClick={showAll} css={[filterBtn, filterIsActive("showAll") && activeFilterBtn]}>All</button>
        <button onClick={showActive} css={[filterBtn, filterIsActive("showActive") && activeFilterBtn]}>Active</button>
        <button onClick={showCompleted} css={[filterBtn, filterIsActive("showCompleted") && activeFilterBtn]}>Completed</button>
      </div>
      <button onClick={clearCompleted} css={clearCompletedBtn}>Clear Completed</button>
    </div>
  )
}

export default TaskFilters;