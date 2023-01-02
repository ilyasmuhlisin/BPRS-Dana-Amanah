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

function Deposito() {
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
                  <img src="./images/depo1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/depo2.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div id="heading">
              <h1>
                Deposito <text>iB</text> Hebat Mudharabah
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Deposito iB Hebat Mudharabah adalah Produk deposito yang
                  dikeluarkan oleh BPRS DANA AMANAH [BDA], yang merupakan solusi
                  berinvestasi yang bersaing dan berani memberi bagi hasil lebih
                  besar dari Deposito di Bank Umum. berdasarkan prinsip syariah
                  islam dengan menggunakan akad mudharabah Muthlaqah (bagi
                  hasil). Produk Deposito ini dijamin LPS (Lembaga Penjamin
                  Simpanan) dengan maksimal Deposito Rp. 2 Milyar
                </p>
              </div>
              <div className="item">
                <h2>Manfaat</h2>
                <p>
                  {/* <h4>Benefit</h4> */}
                  <ul>
                    <li>
                      {" "}
                      Anda dapat memilih sendiri jangka waktu deposito sesuai
                      dengan keinginan.
                    </li>
                    <li>
                      Anda bisa memindahkan bagi hasil Deposito iB Hebat Anda
                      secara otomatis ke rekening tabungan.
                    </li>
                    <li>Tersedia pilihan perpanjangan sesuai kebutuhan.</li>
                    <li>
                      Bagi hasil yang kompetitif dan berani lebih besar dari
                      Deposito di Bank Umum.
                    </li>
                    <li>Dapat digunakan sebagai jaminan pembiayaan.</li>
                  </ul>
                </p>
                <h2>Persyaratan</h2>
                <p>
                  {/* <h4>Persyaratan</h4> */}
                  <ul>
                    <li>Nasabah perorangan atau Badan Usaha</li>
                    <li>Melengkapi dan menandatangani formulir permohonan.</li>
                    <li>
                      Membawa dan menyerahkan copy identitas yang masih berlaku
                      KTP-el untuk WNI
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tablePar">
          <h2>Fitur</h2>
          <div className="tableTab">
            <table class="table1">
              <tr>
                <th>Fitur</th>
                <th>Keterangan</th>
              </tr>
              <tr>
                <td>Mata Uang</td>
                <td>Rupiah</td>
              </tr>
              <tr>
                <td>Jangka Waktu Penempatan</td>
                <td>1, 3, 6 dan 12 bulan</td>
              </tr>
              <tr>
                <td>Joint Account</td>
                <td>
                  <ul>
                    <li>Perorangan dengan Perorangan</li>
                    <li>Perorangan dengan Badan Usaha</li>
                    <li>Badan Usaha dengan Badan Usaha</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Status Perpanjangan</td>
                <td>
                  <ul>
                    <li>Non ARO* (tidak diperpanjang secara otomatis)</li>
                    <li>ARO (perpanjangan nominal deposito secara otomatis)</li>
                    <li>
                      ARO + Bagi Hasil (perpanjangan nominal deposito plus bagi
                      hasil secara otomatis)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Pembayaran Bagi Hasil</td>
                <td>
                  Tiap bulan pada tanggal yang sama dengan tanggal penempatan
                  Deposito iB
                </td>
              </tr>
            </table>
          </div>
            <div className="btnBg">
              <NavLink className="btnTab" to="/">
                Simulasi
              </NavLink>
            </div>
            <div className="btnBg">
              <NavLink className="btnTab" to="/">
                Ajukan Deposito
              </NavLink>
            </div>
        </div>
      </section>
    </>
  );
}

export default Deposito;
