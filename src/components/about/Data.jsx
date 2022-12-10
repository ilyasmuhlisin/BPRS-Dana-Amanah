import React from "react";
import { data } from "../../dummydata";
import "./about.css";

const Data = () => {
  return (
    <>
      <section className="data">
        <div className="container grid">
          {data.map((val) => {
            return (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Data;
