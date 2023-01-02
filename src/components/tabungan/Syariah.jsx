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

function Syariah() {
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
                <img src="./images/syar.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="heading">
            <h1>Pembiayaan Hebat Syariah</h1>
          </div>
          <div className="items">
            <div className="item">
              <p>
                Pembiayaan Hebat Syariah adalah Produk Pembiayaan yang
                dikeluarkan BPRS DANA AMANAH [BDA], Pembiayaan ini diberikan
                kepada perorangan maupun Instansi dengan tujuan pembiayaan
                Pembelian Rumah/Mobil/Motor, Renovasi Rumah, Modal Usaha, Barang
                konsumtif lainnya, Produk ini menggunakan Akan sesuai dengan
                prinsip Syariah Islam diantaranya menggunakan Akad Murabahah,
                Ijarah, Hawalah dll. <br /> <br />
                <h4>Merujuk Fatwa DSN-MUI : </h4>
                No.09/DSN-MUI/IV/2000 tentang Ijarah
                <br />
                No.04/DSN-MUI/IX/2000 tentang murabahah
                <br />
                No.12/DSN-MUI/VI/2000 tentang Hawalah
                <br />
              </p>
            </div>
            <div className="item">
              <h2>Manfaat</h2>
              <p>
                <ul>
                  <li>Tersedia jenis akad sesuai dengan kebutuhan nasabah.</li>
                  <li>
                    Sebagai alternatif dalam memenuhi kebutuhan Modal Usaha,
                    Barang Konsumtif, Renovasi Rumah dll.
                  </li>
                  <li>Menjadi Solusi disetiap kebutuhan Nasabah.</li>
                </ul>
              </p>
              <h2>Biaya</h2>
              <p>
                {/* <h4>Persyaratan</h4> */}
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
  );
}

export default Syariah;
