import React from "react";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from "../accordion/Accordion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./tabungan.css";

// import required modules
import { Navigation } from "swiper";
// import { Accordion } from "@mui/material";

function Asuh() {
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
                  <img src="./images/asuh.png" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="btnBg">
                <NavLink className="btnTab" to="/">
                  Buka Tabungan
                </NavLink>
              </div>
            </div>
            <hr />
            <div id="heading">
              <h1>
                Tabungan <text>iB</text> Hebat Asuh
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Tabungan iB Hebat ASUH adalah Produk Tabungan yang dikeluarkan
                  BPRS DANA AMANAH [BDA] yang dimiliki oleh Nasabah Perorangan
                  yang di khususkan untuk anak Yatim/Piatu yang kurang mampu dan
                  sebagai pelajar mulai dari PAUD, TK, SD, SLTP, SLTA atau
                  sederajat dan sampia di bangku kuliah. Produk ini hanya
                  tersedia dalam prinsip syariah dengan menggunakan akad Wadiah
                  yad dhamanah.
                  <p>
                    Produk Tabungan ini dijamin LPS (Lembaga Penjamin Simpanan)
                    dengan maksimal Tabungan Rp. 2 Milyar.
                  </p>
                </p>
              </div>
              <div className="item">
                <h2>Tujuan Produk</h2>
                {/* <p>
                  <h4>Budaya Menabung</h4>
                  <ul>
                    <li>
                      Menciptakan budaya gemar menabung dan melatih pengelolaan
                      keuangan sejak dini.
                    </li>
                  </ul>
                </p>
                <p>
                  <h4>Pengembangan Aset</h4>
                  <ul>
                    <li>
                      Mengajarkan kepada siswa untuk dapat memiliki dan
                      mengembangkan kekayaan sendiri dengan cara menabung.
                    </li>
                  </ul>
                </p>
                <p>
                  <h4>Literasi Keuangan</h4>
                  <ul>
                    <li>
                      Meningkatkan pengetahuan dan pemahaman kepada siswa, orang
                      tua dan komunitas sekolah mengenai layanan keuangan
                      khususnya produk tabungan.
                    </li>
                  </ul>
                </p>
                <p>
                  <h4>Inklusi Keuangan</h4>
                  <ul>
                    <li>
                      Meningkatkan akses keuangan yang mudah dijangkau, biaya
                      ringan, dan fituryang menarik bagi siswa.
                    </li>
                  </ul>
                </p> */}
              </div>
              <div className="item">
                <h2>Manfaat Produk</h2>
                <p>
                  <h4>Bagi Anak Asuh</h4>
                  <ul>
                    <li>Meringankan beban biaya sekolah</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Asuh;
