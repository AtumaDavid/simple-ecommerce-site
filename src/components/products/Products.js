import React from "react";
import "./Product.css";
import { Card } from "../Card";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export const Products = ({ filteredData }) => {
  return (
    <>
      <section className="card-container">{filteredData}</section>
    </>
  );
};
