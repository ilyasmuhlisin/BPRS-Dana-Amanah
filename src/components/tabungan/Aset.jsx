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

function Aset() {
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
                <img src="./images/aset.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="heading">
            <h1>Pembiayaan Aset Refinancing</h1>
          </div>
          <div className="items">
            <div className="item">
              <p>
                Pembiayaan Hebat Aset Refinancing Syariah adalah Produk
                Pembiayaan yang dikeluarkan BPRS DANA AMANAH [BDA], Pembiayaan
                ini diberikan kepada perorangan maupun Instansi dengan tujuan
                pembiayaan Pembelian Rumah/Mobil/Motor, Renovasi Rumah, Modal
                Usaha, dan Barang konsumtif lainnya, Produk ini menggunakan Akan
                sesuai dengan prinsip Syariah Islam diantaranya menggunakan Akad
                Musyarakah, Musyarakah Mutanaqisah, Ijarah, Ijarah Muntahiya
                bittamlik. dll. <br /> <br />
                <h4>Merujuk Fatwa DSN-MUI : </h4>
                No.89/DSN-MUI/XII/2013 tentang Pembiayaan ulang (Refinancing)
                syariah. <br />
                No.08/DSN-MUI/IV/2000 tentang Akad Musyarakah
                <br />
                No.73/DSN-MUI/XI/2008 tentang Musyarakah Mutanaqisah (MMQ)
                <br />
                No.114/DSN-MUI/IX/2017 tentang Akad Syirkah
                <br />
                No.71/DSN-MUI/VI/2008 tentang Sale and Lease Back
                <br />
                No.09/DSN-MUI/IV/2000 tentang Ijarah No.27/DSN-MUI/III/2002
                tentang Al-Ijarah Al-Muntahiyah Bit Tamlik (IMBT)
              </p>
            </div>
            <div className="item">
              <h2>Manfaat</h2>
              <p>
                <ul>
                  <li>Pembelian Rumah</li>
                  <li>Renovasi Rumah</li>
                  <li>Modal Usaha</li>
                  <li>Barang Konsumtif Lainnya</li>
                </ul>
              </p>
              <h2>Biaya</h2>
              <p>
                {/* <h4>Persyaratan</h4> */}
                <p>
                  Nasabah hanya dikenakan biaya Administrasi riil cost dalam
                  proses persetujuan pembiayaan diantaranya seperti biaya
                  asuransi, biaya notaris, biaya materai dan lain-lain. sesuai
                  dengan ketentuan yang berlaku di BPRS DANA AMANAH SURAKARTA.
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
  );
}

export default Aset;
