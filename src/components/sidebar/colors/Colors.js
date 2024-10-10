import React from "react";
import "./Colors.css";
import { Input } from "../../Input";

export const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test1" />
        <span className="checkmark all"></span>
        All
      </label>
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};
