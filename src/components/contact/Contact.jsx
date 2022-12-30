import React from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1013498586162!2d110.79220869999999!3d-7.5639282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1434e6a5200d%3A0x41410d1c8c98c327!2sBPRS%20DANA%20AMANAH%20%5BBDA%5D!5e0!3m2!1sen!2sid!4v1661947049753!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      {/* <Back title="Contact us" /> */}
      <section className="contacts padding">
        <div className="container-contact flexSB">
          <div className="left row-contact">
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
          <div className="right row-contact">
            <div className="contact-title">
              <h1>Kirim Pesan</h1>
              <p>Hubungi Kami dan Temukan yang Kamu Cari</p>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTelepon">
                <Form.Label>No. Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nomor Telepon"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTelepon">
                <Form.Label>No. Telepon</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Masukkan Nomor Telepon"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <div className="contact-btn">
                <Button type="submit" className="primary-btn c-btn">Kirim</Button>
              </div>
            </Form>
            {/* <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
