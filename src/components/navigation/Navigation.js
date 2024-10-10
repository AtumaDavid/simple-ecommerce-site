import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export const Navigation = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="search for shoes"
        />
      </div>
      <div className="profile-container">
        <FiHeart className="nav-icons" />

        <AiOutlineShoppingCart className="nav-icons" />

        <AiOutlineUserAdd className="nav-icons" />
      </div>
    </nav>
  );
};
