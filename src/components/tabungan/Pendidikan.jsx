import React from 'react'
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./tabungan.css";


// import required modules
import { Navigation } from "swiper";

function Pendidikan() {
  return (
    <>
      <section className="tabungan">
        <div className="container gridAbout">
          <div className="left row">
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
          <div className="right row">
            <div id="heading">
              <h1>
                Tabungan <text>iB</text> Hebat Wadiah
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Tabungan iB Hebat Wadiah adalah Produk Tabungan yang
                  dikeluarkan BPRS DANA AMANAH (BDA) yang dimiliki oleh Nasabah
                  Perorangan maupun Lembaga. Produk ini hanya tersedia dalam
                  prinsip syariah dengan menggunakan akad Wadiah yad dhamanah.
                  Produk Tabungan ini dijamin LPS (Lembaga Penjamin Simpanan)
                  dengan maksimal Tabungan Rp. 2 Milyar.
                </p>
              </div>
              <div className="item">
                <h2>Syarat dan Ketentuan</h2>
                <p>
                  <h4>Persyaratan</h4>
                  <ul>
                    <li>Persyaratan Foto copy KTP/SIM/Pasport</li>
                    <li>Mengisi Formulir pembukaan rekening</li>
                  </ul>
                </p>
                <p>
                  <h4>Fasilitas</h4>
                  <ul>
                    <li>Mendapatkan buku tabungan</li>
                    <li>
                      Mendapatkan pelayanan prima dengan system jemput bola
                    </li>
                    <li>
                      Dana aman, terdaftar dan di awasi oleh OJK serta di jamin
                      oleh Lembaga Penjamin Simpanan (LPS)
                    </li>
                  </ul>
                </p>
                <p>
                  <h4>Biaya - Biaya</h4>
                  <ul>
                    <li>Biaya administrasi bulanan sebesar Rp 0,-</li>
                    <li>Biaya penutupan rekening sebesar Rp 10.000,-</li>
                    <li>Setoran pertama Rp. 50.000,</li>
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

export default Pendidikan