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

function Emas() {
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
                <img src="./images/emas.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="heading">
            <h1>Pembiayaan Kepemilikan Emas</h1>
          </div>
          <div className="items">
            <div className="item">
              <p>
                Pembiayaan Hebat Kepemilikan Emas adalah Produk Pembiayaan yang
                dikeluarkan BPRS DANA AMANAH [BDA], Pembiayaan ini diberikan
                khusus kepada perorangan maupun Instansi dengan tujuan pembelian
                atau kepemilikan Emas batangan. Produk ini menggunakan Akad
                sesuai dengan prinsip syariah Islam diantaranya menggunakan Akad
                Murabahah, dll. <br /> <br />
                <h4>Merujuk Fatwa DSN-MUI : </h4>
                No.04/DSN-MUI/IX/2000 tentang murabahah
                <br />
                No.12/DSN-MUI/VI/2000 tentang jual beli emas secara tidak tunai
              </p>
            </div>
            <div className="item">
              <h2>Manfaat</h2>
              <p>
                <ul>
                  <li>Tersedia jenis akad sesuai dengan kebutuhan nasabah.</li>
                  <li>
                    Sebagai alternatif dalam memenuhi kebutuhan Investasi bagi
                    Nasabah.
                  </li>
                  <li>
                    Menjadi Solusi Investasi yang menguntungkan bagi Nasabah.
                  </li>
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
              <h2>Persyaratan</h2>
              <p>
                <ul>
                  <li>Fc E-KTP</li>
                  <li>Fc KK</li>
                  <li>Fc Surat Nikah</li>
                  <li>FC NPWP (Jika diatas 50Jt)</li>
                </ul>
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

export default Emas;
