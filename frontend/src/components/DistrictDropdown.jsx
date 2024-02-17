// DistrictDropdown.jsx
import React from "react";

const DistrictDropdown = ({ districts, value, onChange }) => {
  return (
    <div className="mb-4">
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
      >
        <option value="">All Districts</option>
        {districts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictDropdown;
