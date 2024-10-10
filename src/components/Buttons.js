import React from "react";

export const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={() => onClickHandler({ target: { value } })}
      className="btns"
    >
      {title}
    </button>
  );
};
