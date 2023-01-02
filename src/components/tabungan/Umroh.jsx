import React from "react";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./tabungan.css";

// import required modules
import { Navigation } from "swiper";
import Accordion from "../accordion/Accordion";

function Umroh() {
  return (
    <section className="tabungan">
      <div className="container gridAbout">
        <div className="left row">
          <Accordion />
        </div>
        <div className="right row">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./images/develop.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="heading">
            <h1>
              Pembiayaan Hebat Umroh
            </h1>
          </div>
          <div className="items">
            <div className="item">
              <p>
                Pembiayaan Hebat Umroh adalah Produk Pembiayaan yang dikeluarkan
                BPRS DANA AMANAH [BDA],Pembiayaan ini diberikan khusus kepada
                perorangan dengan tujuan pengurusan Umrah. Produk ini
                menggunakan Akad sesuai dengan prinsip syariah Islam diantaranya
                menggunakan Akad Qordh, Ijarah, dll.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btnBg">
        <NavLink className="btnTab" to="/">
          Ajukan Pembiayaan
        </NavLink>
      </div>
    </section>
  );
}

export default Umroh;
