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

function Ibadah() {
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
              <div className="btnBg">
                <NavLink className="btnTab" to="/">
                  Buka Tabungan
                </NavLink>
              </div>
            </div>
            <div id="heading">
              <h1>
                Tabungan <text>iB</text> Hebat Rencana ibadah
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Tabungan iB Hebat Rencana Ibadah adalah Produk Tabungan
                  Rencana yang dikeluarkan oleh BPRS DANA AMANAH [BDA],
                  dikhususkan untuk Nasabah Perorangan yang memiliki perencanaan
                  keuangan untuk Ibadah dengan menabung secara rutin setiap
                  bulan dan dengan nominal tertentu serta merencanakan tabungan
                  tersebut untuk Ibadah tertentu, misal untuk Ibadah Umroh,
                  Ibadah Haji, Kurban dan ibadah – ibadah lainnya. Produk ini
                  berdasar prinsip syariah islam dengan menggunakan akad
                  mudharabah.
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

export default Ibadah;
