import React from "react";

export const Input = ({ handleRadioChange, name, value, title, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleRadioChange}
        type="radio"
        value={value}
        name={name}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};
