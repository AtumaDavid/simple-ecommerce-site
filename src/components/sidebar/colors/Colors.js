import React from "react";
import "./Colors.css";
import { Input } from "../../Input";

export const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="color"
        />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />
      {/* <Input
        handleRadioChange={handleRadioChange}
        value="white"
        title="White"
        name="color"
        color="white"
      /> */}
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value="white"
          name="color"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};
