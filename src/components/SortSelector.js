import React from 'react';

const SortSelector = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-selector">
      <label>Sort By:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default SortSelector;
