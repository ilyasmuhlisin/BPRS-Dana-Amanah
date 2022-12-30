import React from "react";
import "./head.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo-img">
              <img src="./images/logo1.png" alt="" />
            </div>
            <label htmlFor="btn" className="icon">
              <i className="fa fa-bars"></i>
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {/* <label htmlFor="btn-1" className="show">
                  Produk<i className="fas fa-caret-down"></i>
                </label> */}
                <NavLink to="/wadiah">Produk</NavLink>
                {/* <input type="checkbox" id="btn-1"></input>
                <ul>
                  <li>
                    <label htmlFor="btn-3" className="show">
                      Simpanan<i className="fas fa-caret-down"></i>
                    </label>
                    <NavLink to="/simpanan">
                      Simpanan<i className="fas fa-caret-down"></i>
                    </NavLink>
                    <input type="checkbox" id="btn-3"></input>
                    <ul>
                      <li>
                        <label htmlFor="btn-4" className="show2">
                          Tabungan<i className="fas fa-caret-down"></i>
                        </label>
                        <NavLink to="/tabungan">Tabungan</NavLink>
                        <input type="checkbox" id="btn-4"></input>
                        <ul>
                          <li>
                            <NavLink className="lineH" to="/wadiah">iB Hebat Wadiah</NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/mudharabah">
                              iB Hebat Mudharabah
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/berhadiah">iB Hebat Berhadiah</NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/simple">
                              iB Hebat Simple
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/asuh">iB Hebat Asuh</NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/multi">
                              iB Hebat Rencana Multi
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/ibadah">iB Hebat Rencana Ibadah</NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/pendidikan">
                              iB Hebat Rencana Pendidikan
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="lineH" to="/pensiun">iB Hebat Rencana Pensiun</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/deposito">Deposito</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/simpanan">Pembiayaan</NavLink>
                  </li>
                  <li>
                    <NavLink to="/jasa">Jasa Lainnya</NavLink>
                  </li>
                </ul> */}
              </li>
              <li>
                <label htmlFor="btn-2" className="show">
                  Tentang<i className="fas fa-caret-down"></i>
                </label>
                <NavLink to="/about">
                  Tentang<i className="fas fa-caret-down"></i>
                </NavLink>
                <input type="checkbox" id="btn-2"></input>
                <ul className="ul-tentang">
                  <li>
                    <NavLink to="/sejarah">Sejarah</NavLink>
                  </li>
                  <li>
                    <NavLink to="/visi">Visi Misi</NavLink>
                  </li>
                  <li>
                    <NavLink className="lineH" to="/organisasi">
                      Struktur Organisasi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Pengurus</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="btn-3" className="show">
                  Berita<i className="fas fa-caret-down"></i>
                </label>
                <NavLink to="/journal">
                  Berita<i className="fas fa-caret-down"></i>
                </NavLink>
                <input type="checkbox" id="btn-3"></input>
                <ul className="ul-berita">
                  <li>
                    <NavLink className="lineH" to="/sejarah">
                      Edukasi Syariah
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="lineH" to="/visi">
                      Laporan Keuangan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="lineH" to="/organisasi">
                      Publikasi BDA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">CSR</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <div className="btn-contactBg">
                  <NavLink className="btn-contact" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
