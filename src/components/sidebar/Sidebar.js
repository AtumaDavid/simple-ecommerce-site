import React from "react";
import "./Sidebar.css";
import { Category } from "./category/Category";
import { Price } from "./price/Price";
import { Colors } from "./colors/Colors";

export const Sidebar = ({ handleRadioChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleRadioChange={handleRadioChange} />
      <Price handleRadioChange={handleRadioChange} />
      <Colors handleRadioChange={handleRadioChange} />
    </section>
  );
};
