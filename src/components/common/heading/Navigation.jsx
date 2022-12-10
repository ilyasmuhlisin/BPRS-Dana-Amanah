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
            <label for="btn" class="icon">
              <i class="fa fa-bars"></i>
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <label for="btn-1" class="show">
                  Produk<i class="fas fa-caret-down"></i>
                </label>
                <NavLink to="/courses">
                  Produk<i class="fas fa-caret-down"></i>
                </NavLink>
                <input type="checkbox" id="btn-1"></input>
                <ul>
                  <li>
                    <label for="btn-3" class="show">
                      Simpanan<i class="fas fa-caret-down"></i>
                    </label>
                    <NavLink to="/simpanan">
                      Simpanan<i class="fas fa-caret-down"></i>
                    </NavLink>
                    <input type="checkbox" id="btn-3"></input>
                    <ul>
                      <li>
                        <label for="btn-4" class="show2">
                          Tabungan<i class="fas fa-caret-down"></i>
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
                </ul>
              </li>
              <li>
                <label for="btn-2" class="show">
                  Tentang<i class="fas fa-caret-down"></i>
                </label>
                <NavLink to="/about">
                  Tentang<i class="fas fa-caret-down"></i>
                </NavLink>
                <input type="checkbox" id="btn-2"></input>
                <ul>
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
                    <NavLink to="/team">Pengurus</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <label for="btn-2" class="show">
                  Berita<i class="fas fa-caret-down"></i>
                </label>
                <NavLink to="/journal">
                  Berita<i class="fas fa-caret-down"></i>
                </NavLink>
                <input type="checkbox" id="btn-2"></input>
                <ul>
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
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
