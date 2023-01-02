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

function Pensiun() {
  return (
    <>
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
                  <img src="./images/wadiah.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="btnBg">
              <NavLink className="btnTab" to="/">
                Buka Tabungan
              </NavLink>
            </div>
            <div id="heading">
              <h1>
                Tabungan <text>iB</text> Hebat Rencana Pensiun
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Tabungan iB Hebat Rencana Pensiun adalah Produk Tabungan
                  Rencana yang dikeluarkan oleh BPRS DANA AMANAH [BDA],
                  dikhususkan untuk Nasabah Perorangan yang memiliki perencanaan
                  keuangan untuk Pensiun dimasa tua dengan menabung secara rutin
                  setiap bulan dan dengan nominal tertentu. Produk ini berdasar
                  prinsip syariah islam dengan menggunakan akad mudharabah.
                  <p>
                    Produk Tabungan ini dijamin LPS (Lembaga Penjamin Simpanan)
                    dengan maksimal Tabungan Rp. 2 Milyar.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pensiun;
