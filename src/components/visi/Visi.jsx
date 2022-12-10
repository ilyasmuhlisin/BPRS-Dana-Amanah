import React from "react";
import "./visi.css";

function Visi() {
  return (
    <>
      <div className="grid-vm">
        <div className="container-visi">
          <div className="visi">
            <span>Visi</span>
          </div>
          <div>
            <p>
              <i>
                Menjadi BPR Syariah terbaik di Indonesia yang Amanah, Sehat dan
                Profesional Menjadi pilihan tempat berinvestasi yang
                menguntungkan dan barokah.
              </i>
            </p>
          </div>
        </div>
        <div className="container-misi">
          <div className="misi">
            <span>Misi</span>
          </div>
          <div>
            <p>
              <i>
                Berkontribusi pada peningkatan perkonomian umat melalui produk
                perbankan syariah yang inovatif dengan tetap menjunjung tinggi
                kepatuhan terhadap aspek syariah untuk memberikan manfaat dan
                kesejahteraan bagi semua stake holder.
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="grid-bk">
        <div className="bk-img">
          <img src="./images/vm-img.png" alt="" />
        </div>
        <div className="container-bk">
          <div>
            <h1>
              Budaya Kerja <span>“Hebat”</span> Sang Juara Kru BDA
            </h1>
          </div>
          <div className="bk-list">
              <ul>
                <li>
                  Harmonis, siap sinergi seluruh tim untuk mencapai tujuan{" "}
                </li>
                <li>
                  Excellent, siap memberikan layanan prima & solusi terbaik
                </li>
                <li>
                  Brilliant, siap kerja keras, kerja cerdas dan kerja ikhlas.
                </li>
                <li>
                  Amanah, siap menjadi pribadi terpercaya & pantang ingkar
                  janji.
                </li>
                <li>
                  Tertib; siap patuh, rapi dan taat pada ketentuan yang berlaku
                </li>
              </ul>
          </div>
          <div>
            <h1>
              Budaya <span>Spiritual</span> Kru BDA
            </h1>
          </div>
          <div className="bk-list">
            <ul>
              <li>
                Sholat di awal waktu dan berjamaah di masjid. Sholat dhuha
                secara rutin.
              </li>
              <li>Sholat dhuha secara rutin.</li>
              <li>
                Membaca al quran, berdzikir (minimal Istighfar) & bersholawat
              </li>
              <li>setiap hari Puasa sunah senin kamis secara rutin.</li>
              <li>Sedekah dengan membiasakan sedekah pagi & sedekah jum’at.</li>
              <li>
                Menjunjung tinggi praktik kejujuran dan larangan menerima
                imbalan/hadiah dalam bentuk apapun terkait tugas dan jabatan
                dari para nasabah dan mitra bisnis yang sifatnya menguntungkan
                pribadi/keluarga.
              </li>
              <li>
                Berperilaku sesuai tuntunan Islam, berpegang teguh pada akhlak
                Islam dalam menjalankan kegiatan sehari-hari serta menutup aurot
                dengan baik, baik di lingkungan kantor maupun di luar kantor.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visi;
