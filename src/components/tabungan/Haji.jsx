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

function Haji() {
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
                <img src="./images/haji.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="heading">
            <h1>Pembiayaan Hebat Porsi Haji</h1>
          </div>
          <div className="items">
            <div className="item">
              <p>
                Pembiayaan Hebat Porsi Haji adalah Produk Pembiayaan yang
                dikeluarkan BPRS DANA AMANAH [BDA],Pembiayaan ini diberikan
                khusus kepada perorangan dengan tujuan pengurusan porsi Haji.
                Produk ini menggunakan Akad sesuai dengan prinsip syariah Islam
                diantaranya menggunakan Akad Qordh, Ijarah, Pembiayaan
                pengurusan Haji LKS. <br /> <br />
                <h4>Merujuk Fatwa DSN-MUI : </h4>
                No.09/DSN-MUI/IV/2000 tentang Ijarah
                <br />
                No.19/DSN-MUI/IV/2001 tentang Qordh
                <br />
                No.29/DSN-MUI/VI/2002 tentang Pembiayaan Pengurusan Haji LKS
                <br />
              </p>
            </div>
            <div className="item">
              <h2>Manfaat</h2>
              <p>
                <ul>
                  <li>
                    Tersedia jenis akad sesuai dengan kebutuhan Calon Jamaah.
                  </li>
                  <li>
                    Membantu dan Memudahkan calon jamaah dalam mendapatkan Porsi
                    Haji.
                  </li>
                  <li>
                    Calon Jamaah dapat berangkat lebih cepat dari pada Menabung
                    terlebih dahulu.
                  </li>
                  <li>
                    Calon Jamaah mendapatkan Porsi Haji langsung dari KEMENAG
                    RI.
                  </li>
                </ul>
              </p>
              <h2>Biaya</h2>
              <p>
                {/* <h4>Persyaratan</h4> */}
                <p>
                  Nasabah hanya dikenakan booking fee sebesar Rp. 1.050.000,-
                  (satu juta lima puluh ribu rupiah) dan langsung mendapatkan
                  Porsi Haji dari KEMENAG RI, selanjutnya tinggal mengangsur Rp.
                  598.000,- (lima ratus sembilan puluh delapan ribu rupiah)
                  setiap bulannya selama 72 bulan.
                </p>
              </p>
              <h2>Persyaratan</h2>
              <p>
                <ul>
                  <li>Fc E-KTP</li>
                  <li>Fc KK</li>
                  <li>Fc Surat Nikah</li>
                  <li>Pas Fhoto 3×4 = 10 Lembar, 5×6 = 5 Lembar</li>
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

export default Haji;
