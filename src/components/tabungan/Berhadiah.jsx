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

function Berhadiah() {
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
                  <img src="./images/h3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h4.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h5.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h6.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h7.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h8.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/h9.jpeg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div id="heading">
              <h1>
                Tabungan <text>iB</text> Hebat Wadiah
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Tabungan iB Hebat Berhadiah adalah salah satu program simpanan
                  yang berdasarkan akad mudharabah yang memberikan hadiah
                  langsung tanpa diundi.
                </p>
              </div>
              <div className="item">
                <h2>Benefit dan Persyaratan</h2>
                <p>
                  <h4>Benefit</h4>
                  <ul>
                    <li>Mendapatkan hadiah langsung tanpa diundi</li>
                    <li>
                      Hadiah bersifat fleksibel sesuai dengan kebutuhan nasabah
                    </li>
                    <li>Bebas biaya administrasi bulanan.</li>
                    <li>
                      Minimal keikutsertaan program mulai dari Rp 5,000,000 dan
                      di hold dalam jangka waktu minimal 3 bulan sampai maksimal
                      60 bulan.
                    </li>
                    <li>Dijamin LPS</li>
                    <li>
                      Selain hadiah masih mendapatkan bagi hasil dengan porsi
                      nisbah 5% : 95%
                    </li>
                  </ul>
                </p>
                <p>
                  <h4>Persyaratan</h4>
                  <ul>
                    <li>Penabung adalah perorangan atau badan/lembaga</li>
                    <li>
                      Pemohon mengisi dan menandatangani aplikasi pembukaan
                      rekening Tabungan Hebat Berhadiah.
                    </li>
                    <li>
                      Pemohon membawa dan menyerahkan fotocopy e-ktp dan npwp
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tablePar">
          <h2>Ketentuan dan Biaya</h2>
          <div className="tableTab">
            <table class="table1">
              <tr>
                <th>Keterangan</th>
                <th>Jumlah (Rp)</th>
              </tr>
              <tr>
                <td>Setoran Awal</td>
                <td>Mulai 5,000,000</td>
              </tr>
              <tr>
                <td>Setoran Minimal Selanjutnya</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Biaya Administrasi Bulanan</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Biaya Penutupan Rekening</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Jangka Waktu Hold</td>
                <td>3 - 6 Bulan</td>
              </tr>
            </table>
          </div>
          <div className="btnBg">
            <NavLink className="btnTab" to="/">
              Ajukan Tabungan Berhadiah
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Berhadiah;
