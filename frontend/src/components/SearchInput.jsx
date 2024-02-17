// SearchInput.jsx
import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchInput;
