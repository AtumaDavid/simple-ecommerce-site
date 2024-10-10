import React from "react";
import "./Price.css";
import { Input } from "../../Input";

export const Price = ({ handleRadioChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};
