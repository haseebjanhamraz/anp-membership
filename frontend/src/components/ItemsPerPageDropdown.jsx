// ItemsPerPageDropdown.jsx
import React from "react";

const ItemsPerPageDropdown = ({ value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
      >
        <option value={10}>10 per page</option>
        <option value={30}>30 per page</option>
        <option value={50}>50 per page</option>
        <option value={100}>100 per page</option>
        <option value={-1}>Show All</option>
      </select>
    </div>
  );
};

export default ItemsPerPageDropdown;
