import React from "react";
import "./Product.css";

export const Products = ({ filteredData }) => {
  return (
    <>
      <section className="card-container">{filteredData}</section>
    </>
  );
};
