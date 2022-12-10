import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1013498586162!2d110.79220869999999!3d-7.5639282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1434e6a5200d%3A0x41410d1c8c98c327!2sBPRS%20DANA%20AMANAH%20%5BBDA%5D!5e0!3m2!1sen!2sid!4v1661947049753!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      {/* <Back title="Contact us" /> */}
      <section className="contacts padding">
        <div className="container flexSB">
          <div className="left row">
            <div className="items grid4">
              <div className="box">
                <h4>Alamat Kantor</h4>
                <p>Jl. KH. Samanhudi No.162, Surakarta, Jawa Tengah</p>
              </div>
              <div className="box">
                <h4>Email</h4>
                <p>bprsdanaamanahsolo@gmail.com</p>
                <p> humas@bprsdanaamanah.com</p>
              </div>
            </div>
            <div className="items grid4">
              <div className="box">
                <h4>Kontak</h4>
                <p>Telpon | 0271 725 754 </p>
                <p>Fax | 0271 7466 965</p>
                <p>WA | +62 819 4101 101</p>
              </div>
              <div className="box">
                <h4>Jam Buka Kantor</h4>
                <p>
                  (<i>Jam Operasional</i>)
                </p>
                <p> Senin – Jum’at | 08:00 – 16:30</p>
                <p>
                  (<i>Jam Kas Teller</i>)
                </p>
                <p>Senin – Jum’at | 08:00 – 16:00</p>
              </div>
            </div>
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <div className="contact-title">
              <h1>Kirim Pesan</h1>
              <p>Hubungi Kami dan Temukan yang Kamu Cari</p>
            </div>
            <form action="">
              <label for="name">Nama</label>
              <input type="text" name="name" placeholder="Masukkan Nama" />
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" />
              <label for="telepon">No. Telepon</label>
              <input
                type="text"
                name="telepon"
                placeholder="Masukkan Nomor Telepon"
              />
              <label for="pesan">Pesan</label>
              <textarea
                cols="30"
                name="pesan"
                rows="10"
                placeholder="Ketikkan Pesan"
              ></textarea>
              <div className="contact-btn">
                <button className="primary-btn">Kirim</button>
              </div>
            </form>

            {/* <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
