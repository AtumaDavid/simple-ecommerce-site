import React from "react";
import "./Recommended.css";
import { Buttons } from "../Buttons";

export const Recommended = ({ handleButtonClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            onClickHandler={handleButtonClick}
            value=""
            title="All Products"
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Nike"
            title="Nike"
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Adidas"
            title="Adidas"
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Puma"
            title="Puma"
          />
          <Buttons
            onClickHandler={handleButtonClick}
            value="Vans"
            title="Vans"
          />
        </div>
      </div>
    </>
  );
};
