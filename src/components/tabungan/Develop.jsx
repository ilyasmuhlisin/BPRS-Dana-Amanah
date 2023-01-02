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

function Develop() {
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
                  <img src="./images/develop.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div id="heading">
              <h1>
                Pembiayaan <text>iB</text> Hebat Developer
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Pembiayaan iB Hebat Developer adalah Produk Pembiayaan yang
                  dikeluarkan BPRS DANA AMANAH [BDA], Pembiayaan ini diberikan
                  kepada para Developer perorangan maupun instansi untuk tujuan
                  pembebasan lahan, pematangan lahan, konstruksi dll. Produk ini
                  sesuai dengan prinsip Syariah Islam. yang menggunakan Akad
                  Murabahah, Musyarakah Mutanaqisah, Hawalah dll.
                </p>
              </div>
              <div className="item">
                <h2>Manfaat</h2>
                <p>
                  <ul>
                    <li>
                      Tersedia jenis akad sesuai dengan kebutuhan Developer.
                    </li>
                    <li>
                      Sebagai alternatif dalam memenuhi kebutuhan Developer.
                    </li>
                    <li>
                      Meningkatkan Developer dalam mengembangkan Bisnisnya.
                    </li>
                    <li>
                      Memudahkan Nasabah Developer dalam pembebasan Lahan,
                      Pematangan dll.
                    </li>
                  </ul>
                </p>
                <h2>Akad</h2>
                <p>
                  {/* <h4>Persyaratan</h4> */}
                  <p>
                    Murabahah dimana BPRS Dana Amanah Surakarta membiayai
                    pembelian lahan, Pematangan Lahan, Konstruksi dll. yang
                    diperlukan oleh Nasabah Developer sebesar harga pokok
                    ditambah dengan margin keuntungan Bank yang disepakati.
                    <p>
                      Hawalah dimana BPRS Dana Amanah Surakarta membiayai
                      kekurangan pembelian lahan, Pematangan Lahan dll. yang
                      diperlukan nasabah Developer agar proses bisnis tetap
                      berjalan dengan lancar dan tumbuh.
                    </p>
                  </p>
                </p>
                <h2>Biaya</h2>
                <p>
                  <p>
                    Nasabah hanya dikenakan biaya Administrasi Riil Cost dalam
                    proses persetujuan pembiayaan diantaranya seperti biaya
                    asuransi, biaya notaris, biaya materai dan lain-lain. sesuai
                    dengan ketentuan yang berlaku di BPRS DANA AMANAH [BDA].
                  </p>
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
    </>
  );
}

export default Develop;
