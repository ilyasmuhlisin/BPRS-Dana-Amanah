import React from "react";
import "./product.css";
import { online } from "../../dummydata";

const ProductCard = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <div id="heading">
            <h1>
              Produk Tabungan <text>iB</text> Hebat
            </h1>
            <h3>
              Produk Tabungan BDA menggunakan Akad Syariah, Aman, Amanah dan
              barokah.
            </h3>
          </div>
          <div className="content grid">
            {online.map((val) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={val.cover} className="img" />
                    <h1>{val.courseName}</h1>
                  </div>
                  <div className="flip-card-back">
                    <img src={val.hoverCover} alt="" className="img" />
                    <h1>{val.courseName}</h1>
                    <p>{val.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
