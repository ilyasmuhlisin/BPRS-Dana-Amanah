import React from "react";
// import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer className="footer">
        <div className="container padding">
          <div className="box logo">
            <img src="./images/logo1.png" alt="" />
            <p>
              BPRS DANA AMANAH adalah BPR Syariah yang ke 2 (dua) berdiri di
              kota Surakarta, Sebagai upaya meningkatkan kemakmuran bersama
              melalui pengamalan perbankan yang sesuai kaidah syariah.
            </p>
            <div className="titleAddress">
              <h4>
                <b>Follow Us</b>
              </h4>
            </div>
            <div className="foot-icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          {/* <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div> */}
          <div className="box link">
            <div className="titleAddress">
              <h4>
                <b>Jam Buka Kantor</b>
              </h4>
            </div>
            <div className="flexSB">
              <div>
                <h5>
                  (<i>Jam Operasional</i>)
                </h5>
                <p>Senin-Jum'at | 08.00 - 16.30</p>
              </div>
              <div>
                <h5>
                  (<i>Jam Kas Teller</i>)
                </h5>
                <p>Senin-Jum'at | 08.00 - 16.00</p>
              </div>
            </div>
            <div className="titleAddress">
              <h4>
                <b>Alamat Kantor</b>
              </h4>
            </div>
            <p>Jl. KH. Samanhudi No.162, Surakarta, Jawa Tengah</p>
            <div className="flexSB">
              <div>
                <div className="titleAddress">
                  <h4>
                    <b>Email</b>
                  </h4>
                </div>
                <p>bprsdanaamanahsolo@gmail.com</p>
                <p> humas@bprsdanaamanah.com</p>
              </div>
              <div>
                <div className="titleAddress">
                  <h4>
                    <b>Kontak</b>
                  </h4>
                </div>
                <p>Telepon | 0271 725 754 </p>
                <p>Fax | 0271 7466 965 </p>
                <p>WA | +62 819 4101</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-legal">
          <hr color="white" />
          <div className="legal">
            <p>Copyright ©2022 by Internship Student</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
