import React from "react";
import "./Category.css";
import { Input } from "../../Input";

export const Category = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};
