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

function Sergur() {
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
                  <img src="./images/sergur1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/sergur.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div id="heading">
              <h1>
                Pembiayaan <text>iB</text> Sergur Hebat
              </h1>
            </div>
            <div className="items">
              <div className="item">
                <p>
                  Pembiayaan iB SERGUR HEBAT adalah Produk Pembiayaan yang
                  dikeluarkan BPRS DANA AMANAH [BDA] dikhususkan untuk Bapak/Ibu
                  Guru Paud/TK, SD/MI, SLTP/MTs, SMA/SMK/MA. Pembiayaan ini
                  diberikan untuk tujuan multiguna atau konsumtif yang sesuai
                  dengan prinsip Syariah kepada rekan rekan Guru dalam memenuhi
                  kebutuhannya seperti pelunasan hutang, renovasi rumah, biaya
                  pendidikan dan rumah tangga lainnya.
                </p>
              </div>
              <div className="item">
                <h2>Manfaat</h2>
                <p>
                  {/* <h4>Benefit</h4> */}

                  <ul>
                    <li>Tersedia jenis akad sesuai dengan kebutuhan nasabah</li>
                    <li>Sebagai alternatif dalam memenuhi kebutuhan.</li>
                    <li>
                      Meningkatkan semangat guru dalam menjalankan tugasnya.
                    </li>
                    <li>
                      Jumlah angsuran yang diwajibkan masih cukup wajar
                      dibandingkan sertifikasi yang diterima.
                    </li>
                  </ul>
                </p>
                <h2>Akad</h2>
                <p>
                  {/* <h4>Persyaratan</h4> */}
                  <p>
                    Murabahah dimana BPRS Dana Amanah Surakarta membiayai
                    pembelian barang-barang kebutuhan konsumtif yang diperlukan
                    oleh Nasabah sebesar harga pokok ditambah dengan margin
                    keuntungan Bank yang disepakati.
                    <p>
                      Hawalah dimana BPRS Dana Amanah Surakarta membiayai
                      kebutuhan konsumtif akan hutang Nasabah, bisa berupa
                      hutang atau tagihan Pendidikan.
                    </p>
                    <p>
                      Ijarah dimana BPRS Dana Amanah surakarta membiayai sewa
                      atas kebutuhan suatu barang yang akan dimanfaatkan.
                    </p>
                  </p>
                </p>
                <h2>Biaya</h2>
                <p>
                  <p>
                    Nasabah hanya dikenakan biaya Administrasi riil cost dalam
                    proses persetujuan pembiayaan diantaranya seperti biaya
                    asuransi, biaya notaris, biaya materai dan lain-lain. sesuai
                    dengan ketentuan yang berlaku di BPRS DANA AMANAH SURAKARTA.
                  </p>
                  <h4>Informasi tambahan</h4>
                  <p>
                    Berlaku tidak hanya PNS tetapi semua Guru yang sudah
                    mendapatkan Sertifikasi
                  </p>
                </p>
                <h2>Persyaratan</h2>
                <p>
                  <ul>
                    <li>
                      Guru yang sudah mempunyai Nomor Unik Pendidik dan Tenaga
                      Kependidikan.
                    </li>
                    <li>
                      Mempunyai SK Pengangkatan Pegawai untuk PNS atau SK untuk
                      non PNS dari Kementrian terkait.
                    </li>
                    <li>
                      Telah mendapatkan pengesahan sebagai seorang Pendidik
                      dengan dibuktikan Sertifikat Pendidik yang dikeluarkan
                      Kementrian Riset Tehnologi dan Pendidikan Tinggi atau
                      Kementrian Agama untuk guru dengan status PNS Kemenag.
                    </li>
                    <li>
                      Mempunyai Surat Tugas Mengajar dengan jam mengajar minimal
                      24 jam.
                    </li>
                    <li>
                      Pembiayaan bisa melalui agen yang sudah MOU dengan BPRS
                      Dana Amanah Surakarta atau secara langsung pengajuan ke
                      BPRS Dana Amanah Surakarta
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btnBg">
          <NavLink className="btnTab" to="/">
            Simulasi
          </NavLink>
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

export default Sergur;
