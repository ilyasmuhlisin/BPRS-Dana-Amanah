import React from "react";
import "./Hero.css";
import Slide from "./Slide";
import SlideBoot from "./SlideBoot";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container-slide">
          <SlideBoot/>
        </div>
      </section>
    </>
  );
};

export default Hero;

// {/* <div className="row">
//   <Heading
//     subtitle="WELCOME TO BPRS DANA AMANAH"
//     title="Best Islamic Bank In Surakarta"
//   />
//   <p>
//     Far far away, behind the word mountains, far from the countries Vokalia and
//     Consonantia, there live the blind texts.
//   </p>
//   <div className="button">
//     <button className="primary-btn">
//       BUKA TABUNGAN <i className="fa fa-long-arrow-alt-right"></i>
//     </button>
//     {/* <button>
//                 LIHAT PRODUK <i className="fa fa-long-arrow-alt-right"></i>
//               </button> */}
//   </div>
// </div>; */}