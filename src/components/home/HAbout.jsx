import React from "react";
import ProductCard from "../allproduct/ProductCard";
import "../allproduct/product.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <ProductCard />
      </section>
    </>
  );
};

export default HAbout;
