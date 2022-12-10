import React from "react";
import "./about.css";
import Data from "./Data";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container gridAbout">
          <div className="left row">
            <div id="heading">
              <h1>Sejarah BPRS Dana Amanah (BDA)</h1>
            </div>
            <div className="items">
              <div>
                <p>
                  BPR Syari’ah Dana Amanah Surakarta adalah BPR Syariah yang ke
                  2 (dua) berdiri di kota Surakarta, yang diresmikan oleh Bank
                  Indonesia Pada tanggal 23 Mei 2008 M atau bertepatan dengan
                  tanggal 17 Jumadil Ula 1429H, yang mulai beroperasi 2 Juni
                  2008 M atau 27 Jumadil Ula 1429 H. Sebagai upaya meningkatkan
                  kemakmuran bersama melalui pengamalan perbankan yang sesuai
                  kaidah syariah.
                </p>
              </div>
              <div>
                <p>
                  BPR Syariah Dana Amanah terus berupaya memberikan pelayanan
                  perbankan yang profesional dan amanah, melalui produk dan jasa
                  layanan yang aman, nyaman, inovatif dan menguntungkan, serta
                  terus tumbuh secara sehat, dengan kinerja dan reputasi
                  positif. dengan penekanan pada semangat kewirausahaan, serta
                  saling menolong, keunggulan manajemen dan orientasi investasi
                  yang inovatif untuk memaksimalkan nilai tambah bagi para
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
          <div className="right row">
            <img src="./images/sejarah.png" alt="" />
          </div>
        </div>
        <Data />
      </section>
    </>
  );
};

export default AboutCard;
